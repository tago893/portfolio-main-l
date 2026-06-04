from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.db import get_session
from app.models import Booking
from app.schemas import BookingRequest, BookingResponse
from app.services import seats as seat_service

router = APIRouter(prefix="/bookings", tags=["bookings"])


@router.post("", response_model=BookingResponse, status_code=201)
async def create_booking(
    body: BookingRequest,
    idempotency_key: str | None = Header(default=None, alias="Idempotency-Key"),
    session: AsyncSession = Depends(get_session),
):
    booking = await seat_service.confirm_booking(
        session, body.seat_id, body.user_id, idempotency_key
    )
    return BookingResponse(
        id=booking.id,
        seat_id=booking.seat_id,
        user_id=booking.user_id,
        created_at=booking.created_at,
    )


@router.get("/{booking_id}", response_model=BookingResponse)
async def get_booking(booking_id: int, session: AsyncSession = Depends(get_session)):
    b = await session.get(Booking, booking_id)
    if b is None:
        raise HTTPException(404, "booking not found")
    return BookingResponse(
        id=b.id, seat_id=b.seat_id, user_id=b.user_id, created_at=b.created_at
    )
