"""Test config — runs against the docker-compose Postgres + Redis.

Each test gets a fresh schema and a flushed Redis DB to keep cases isolated.
Skip the whole suite when infra isn't reachable so `pytest` works on a bare clone.
"""
import asyncio
import os

import pytest
import pytest_asyncio
from httpx import ASGITransport, AsyncClient

os.environ.setdefault(
    "DATABASE_URL",
    "postgresql+asyncpg://eventseat:eventseat@localhost:5432/eventseat",
)
os.environ.setdefault("REDIS_URL", "redis://localhost:6379/0")
os.environ.setdefault("HOLD_TTL_SECONDS", "5")


def _infra_up() -> bool:
    import socket

    for host, port in [("localhost", 5432), ("localhost", 6379)]:
        try:
            with socket.create_connection((host, port), timeout=0.5):
                pass
        except OSError:
            return False
    return True


if not _infra_up():
    pytest.skip(
        "EventSeat tests need local Postgres + Redis. Run `docker compose up -d postgres redis`.",
        allow_module_level=True,
    )


from app import redis_client  # noqa: E402
from app.db import engine  # noqa: E402
from app.main import app  # noqa: E402
from app.models import Base, Event, Seat  # noqa: E402
from app.db import SessionLocal  # noqa: E402


@pytest.fixture(scope="session")
def event_loop():
    loop = asyncio.new_event_loop()
    yield loop
    loop.close()


@pytest_asyncio.fixture(autouse=True)
async def reset_state():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    await redis_client.redis.flushdb()
    async with SessionLocal() as s:
        event = Event(name="Test Show")
        s.add(event)
        await s.flush()
        for i in range(1, 21):
            s.add(Seat(event_id=event.id, label=f"S{i}"))
        await s.commit()
    yield


@pytest_asyncio.fixture
async def client():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as c:
        yield c
