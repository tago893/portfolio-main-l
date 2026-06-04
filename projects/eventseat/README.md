# EventSeat

High-concurrency seat reservation backend. Holds seats correctly under load — no double-booking, no orphaned holds.

## What it does

- **Hold** a seat for a user for N seconds (Redis TTL lock)
- **Confirm** a held seat into a permanent booking (Postgres transaction, row-level lock)
- **Release** automatically if the user abandons checkout (TTL expires)
- **Idempotent** booking endpoint — safe to retry on flaky clients / webhook replays

## Design

```
client ──POST /holds──▶ FastAPI ──SETNX seat:{id}──▶ Redis  (TTL = 120s)
                            │
client ──POST /bookings──▶  │  ──BEGIN; SELECT … FOR UPDATE──▶ Postgres
                            │     INSERT booking; DELETE hold; COMMIT
                            ▼
                      idempotency_keys table prevents duplicate commits
```

Two layers of safety:
1. **Redis TTL hold** — fast, expires automatically, prevents two carts grabbing the same seat.
2. **Postgres `SELECT … FOR UPDATE`** — authoritative commit, blocks any racing booking on the same seat row.

Idempotency keys are stored with the resulting `booking_id`. A retry with the same key returns the original booking instead of creating a new one.

## Stack

- Python 3.11, FastAPI, SQLAlchemy 2.0 (async), Pydantic v2
- PostgreSQL 16, Redis 7
- pytest + httpx for tests
- Docker Compose for local infra

## Run it

```bash
cp .env.example .env
docker compose up -d postgres redis
pip install -r requirements.txt
python -m scripts.init_db          # create tables + seed an event with 100 seats
uvicorn app.main:app --reload
```

Open http://localhost:8000/docs for the Swagger UI.

### One-shot with Docker

```bash
docker compose up --build
```

## API

| Method | Path                       | Purpose                                  |
|--------|----------------------------|------------------------------------------|
| GET    | `/events/{id}/seats`       | List seats with status (free/held/sold)  |
| POST   | `/holds`                   | Hold a seat for `ttl_seconds`            |
| DELETE | `/holds/{seat_id}`         | Release a hold (the holder only)         |
| POST   | `/bookings`                | Confirm hold → booking (idempotent)      |
| GET    | `/bookings/{booking_id}`   | Fetch a booking                          |

Example:

```bash
# Hold seat 42 for user "alice"
curl -X POST localhost:8000/holds \
  -H 'content-type: application/json' \
  -d '{"seat_id": 42, "user_id": "alice", "ttl_seconds": 120}'

# Confirm with an idempotency key
curl -X POST localhost:8000/bookings \
  -H 'content-type: application/json' \
  -H 'Idempotency-Key: ck_abc123' \
  -d '{"seat_id": 42, "user_id": "alice"}'
```

## Tests

```bash
pytest -q
```

Covers:
- Hold → confirm happy path
- Double-hold rejected (second caller gets 409)
- Confirm without hold rejected
- Confirm by wrong user rejected
- Idempotency: same key → same booking_id, no duplicate row
- TTL expiry: hold auto-releases and seat becomes holdable again
- Concurrent confirm race: 50 parallel bookings on 10 seats → exactly 10 bookings

## Repo layout

```
app/
  main.py            FastAPI app + lifespan
  config.py          env settings
  db.py              async SQLAlchemy engine + session
  redis_client.py    async redis with SETNX helpers
  models.py          Event, Seat, Booking, IdempotencyKey
  schemas.py         Pydantic request/response
  services/
    seats.py         hold / release / confirm logic
  routes/
    events.py
    holds.py
    bookings.py
tests/
scripts/
  init_db.py         create tables + seed demo event
```

## License

MIT
