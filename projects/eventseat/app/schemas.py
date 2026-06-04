from datetime import datetime

from pydantic import BaseModel, Field


class HoldRequest(BaseModel):
    seat_id: int
    user_id: str = Field(min_length=1, max_length=100)
    ttl_seconds: int | None = Field(default=None, ge=5, le=600)


class HoldResponse(BaseModel):
    seat_id: int
    user_id: str
    expires_in: int


class BookingRequest(BaseModel):
    seat_id: int
    user_id: str = Field(min_length=1, max_length=100)


class BookingResponse(BaseModel):
    id: int
    seat_id: int
    user_id: str
    created_at: datetime


class SeatStatus(BaseModel):
    id: int
    label: str
    status: str  # "free" | "held" | "sold"
    held_by: str | None = None
