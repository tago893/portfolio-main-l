import asyncio

import pytest


@pytest.mark.asyncio
async def test_hold_then_confirm(client):
    r = await client.post("/holds", json={"seat_id": 1, "user_id": "alice"})
    assert r.status_code == 201

    r = await client.post(
        "/bookings",
        json={"seat_id": 1, "user_id": "alice"},
        headers={"Idempotency-Key": "k1"},
    )
    assert r.status_code == 201
    booking_id = r.json()["id"]
    assert booking_id > 0


@pytest.mark.asyncio
async def test_double_hold_rejected(client):
    r1 = await client.post("/holds", json={"seat_id": 2, "user_id": "alice"})
    assert r1.status_code == 201
    r2 = await client.post("/holds", json={"seat_id": 2, "user_id": "bob"})
    assert r2.status_code == 409


@pytest.mark.asyncio
async def test_same_user_can_refresh_hold(client):
    r1 = await client.post("/holds", json={"seat_id": 3, "user_id": "alice"})
    assert r1.status_code == 201
    r2 = await client.post("/holds", json={"seat_id": 3, "user_id": "alice"})
    assert r2.status_code == 201


@pytest.mark.asyncio
async def test_confirm_without_hold_rejected(client):
    r = await client.post("/bookings", json={"seat_id": 4, "user_id": "alice"})
    assert r.status_code == 409


@pytest.mark.asyncio
async def test_confirm_by_non_holder_rejected(client):
    await client.post("/holds", json={"seat_id": 5, "user_id": "alice"})
    r = await client.post("/bookings", json={"seat_id": 5, "user_id": "bob"})
    assert r.status_code == 409


@pytest.mark.asyncio
async def test_idempotency_returns_same_booking(client):
    await client.post("/holds", json={"seat_id": 6, "user_id": "alice"})
    r1 = await client.post(
        "/bookings",
        json={"seat_id": 6, "user_id": "alice"},
        headers={"Idempotency-Key": "dup"},
    )
    r2 = await client.post(
        "/bookings",
        json={"seat_id": 6, "user_id": "alice"},
        headers={"Idempotency-Key": "dup"},
    )
    assert r1.status_code == 201 and r2.status_code == 201
    assert r1.json()["id"] == r2.json()["id"]


@pytest.mark.asyncio
async def test_ttl_expiry_releases_seat(client):
    r = await client.post(
        "/holds", json={"seat_id": 7, "user_id": "alice", "ttl_seconds": 5}
    )
    assert r.status_code == 201
    await asyncio.sleep(6)
    r = await client.post("/holds", json={"seat_id": 7, "user_id": "bob"})
    assert r.status_code == 201


@pytest.mark.asyncio
async def test_concurrent_confirms_on_shared_seats(client):
    # 5 users race for 3 seats. Each user grabs a hold then confirms.
    # Only one user can hold a given seat at a time, so we expect
    # exactly 3 bookings — no double-booking, no extras.
    seat_ids = [10, 11, 12]
    users = [f"u{i}" for i in range(5)]

    async def attempt(user: str, seat_id: int):
        h = await client.post("/holds", json={"seat_id": seat_id, "user_id": user})
        if h.status_code != 201:
            return None
        b = await client.post(
            "/bookings",
            json={"seat_id": seat_id, "user_id": user},
            headers={"Idempotency-Key": f"{user}:{seat_id}"},
        )
        return b.json()["id"] if b.status_code == 201 else None

    tasks = [attempt(u, s) for u in users for s in seat_ids]
    results = await asyncio.gather(*tasks)
    booking_ids = [r for r in results if r is not None]
    assert len(booking_ids) == len(seat_ids)
    assert len(set(booking_ids)) == len(seat_ids)
