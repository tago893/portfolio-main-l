from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app import redis_client
from app.db import get_session
from app.models import Booking, Event, Seat
from app.schemas import SeatStatus

router = APIRouter(prefix="/events", tags=["events"])


@router.get("/{event_id}/seats", response_model=list[SeatStatus])
async def list_seats(event_id: int, session: AsyncSession = Depends(get_session)):
    event = await session.get(Event, event_id)
    if event is None:
        raise HTTPException(404, "event not found")

    seats = (
        await session.scalars(select(Seat).where(Seat.event_id == event_id).order_by(Seat.id))
    ).all()
    sold_ids = set(
        (
            await session.scalars(
                select(Booking.seat_id).where(Booking.seat_id.in_([s.id for s in seats]))
            )
        ).all()
    )

    out: list[SeatStatus] = []
    for s in seats:
        if s.id in sold_ids:
            status = "sold"
            held_by = None
        else:
            holder = await redis_client.get_holder(s.id)
            status = "held" if holder else "free"
            held_by = holder
        out.append(SeatStatus(id=s.id, label=s.label, status=status, held_by=held_by))
    return out
