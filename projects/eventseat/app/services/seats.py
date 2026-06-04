from fastapi import HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app import redis_client
from app.config import settings
from app.models import Booking, IdempotencyKey, Seat


async def hold_seat(
    session: AsyncSession, seat_id: int, user_id: str, ttl_seconds: int | None
) -> int:
    """Acquire a Redis TTL lock on a seat for `user_id`.

    Rejects if the seat is already sold or held by someone else.
    Returns the actual ttl applied.
    """
    seat = await session.get(Seat, seat_id)
    if seat is None:
        raise HTTPException(404, "seat not found")

    # Already sold?
    sold = await session.scalar(select(Booking).where(Booking.seat_id == seat_id))
    if sold is not None:
        raise HTTPException(409, "seat already booked")

    ttl = ttl_seconds or settings.hold_ttl_seconds
    ok = await redis_client.acquire_hold(seat_id, user_id, ttl)
    if not ok:
        # Re-hold by the same user is allowed (refresh)
        current = await redis_client.get_holder(seat_id)
        if current == user_id:
            await redis_client.redis.expire(redis_client.seat_key(seat_id), ttl)
            return ttl
        raise HTTPException(409, "seat is currently held by another user")
    return ttl


async def release_seat(seat_id: int, user_id: str) -> None:
    released = await redis_client.release_hold(seat_id, user_id)
    if not released:
        raise HTTPException(409, "no hold to release for this user")


async def confirm_booking(
    session: AsyncSession,
    seat_id: int,
    user_id: str,
    idempotency_key: str | None,
) -> Booking:
    """Confirm a held seat into a permanent booking.

    Atomic path:
      1. If idempotency_key was used before -> return that booking.
      2. Verify Redis hold belongs to this user.
      3. SELECT seat FOR UPDATE -> block any concurrent confirmer.
      4. Check no booking exists -> insert booking.
      5. Store idempotency key -> commit -> release Redis hold.
    """
    if idempotency_key:
        prior = await session.get(IdempotencyKey, idempotency_key)
        if prior is not None:
            existing = await session.get(Booking, prior.booking_id)
            if existing is not None:
                return existing

    holder = await redis_client.get_holder(seat_id)
    if holder != user_id:
        raise HTTPException(409, "you do not hold this seat")

    async with session.begin():
        # Row-level lock on the seat — serializes concurrent confirms.
        seat = await session.scalar(
            select(Seat).where(Seat.id == seat_id).with_for_update()
        )
        if seat is None:
            raise HTTPException(404, "seat not found")

        existing = await session.scalar(select(Booking).where(Booking.seat_id == seat_id))
        if existing is not None:
            raise HTTPException(409, "seat already booked")

        booking = Booking(seat_id=seat_id, user_id=user_id)
        session.add(booking)
        await session.flush()

        if idempotency_key:
            session.add(IdempotencyKey(key=idempotency_key, booking_id=booking.id))
    # transaction committed

    await session.refresh(booking)
    # Best-effort release; the hold will TTL out anyway.
    await redis_client.release_hold(seat_id, user_id)
    return booking
