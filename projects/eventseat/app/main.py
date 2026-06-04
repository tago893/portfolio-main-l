from contextlib import asynccontextmanager

from fastapi import FastAPI

from app import redis_client
from app.db import engine
from app.models import Base
from app.routes import bookings, events, holds


@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    await redis_client.redis.aclose()
    await engine.dispose()


app = FastAPI(title="EventSeat", version="0.1.0", lifespan=lifespan)
app.include_router(events.router)
app.include_router(holds.router)
app.include_router(bookings.router)


@app.get("/healthz")
async def healthz():
    return {"ok": True}
