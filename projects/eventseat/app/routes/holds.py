from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db import get_session
from app.schemas import HoldRequest, HoldResponse
from app.services import seats as seat_service

router = APIRouter(prefix="/holds", tags=["holds"])


@router.post("", response_model=HoldResponse, status_code=201)
async def create_hold(body: HoldRequest, session: AsyncSession = Depends(get_session)):
    ttl = await seat_service.hold_seat(session, body.seat_id, body.user_id, body.ttl_seconds)
    return HoldResponse(seat_id=body.seat_id, user_id=body.user_id, expires_in=ttl)


@router.delete("/{seat_id}", status_code=204)
async def delete_hold(seat_id: int, user_id: str):
    await seat_service.release_seat(seat_id, user_id)
