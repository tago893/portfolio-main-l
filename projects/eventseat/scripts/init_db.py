"""Create tables and seed one demo event with 100 seats."""
import asyncio

from sqlalchemy import select

from app.db import SessionLocal, engine
from app.models import Base, Event, Seat


async def main() -> None:
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with SessionLocal() as session:
        existing = await session.scalar(select(Event).where(Event.name == "Demo Show"))
        if existing:
            print(f"event already seeded: id={existing.id}")
            return
        event = Event(name="Demo Show")
        session.add(event)
        await session.flush()
        for i in range(1, 101):
            row = chr(ord("A") + (i - 1) // 10)
            col = ((i - 1) % 10) + 1
            session.add(Seat(event_id=event.id, label=f"{row}{col}"))
        await session.commit()
        print(f"seeded event id={event.id} with 100 seats")

    await engine.dispose()


if __name__ == "__main__":
    asyncio.run(main())
