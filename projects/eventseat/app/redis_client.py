from redis.asyncio import Redis

from app.config import settings

redis: Redis = Redis.from_url(settings.redis_url, decode_responses=True)


def seat_key(seat_id: int) -> str:
    return f"seat:hold:{seat_id}"


async def acquire_hold(seat_id: int, user_id: str, ttl: int) -> bool:
    """SET NX with TTL. Returns True if the lock was acquired by this user."""
    return bool(await redis.set(seat_key(seat_id), user_id, nx=True, ex=ttl))


async def get_holder(seat_id: int) -> str | None:
    return await redis.get(seat_key(seat_id))


async def release_hold(seat_id: int, user_id: str) -> bool:
    """Only the holder can release. Uses a Lua CAS to avoid releasing
    a hold that expired and was re-acquired by someone else."""
    lua = """
    if redis.call('GET', KEYS[1]) == ARGV[1] then
        return redis.call('DEL', KEYS[1])
    else
        return 0
    end
    """
    res = await redis.eval(lua, 1, seat_key(seat_id), user_id)
    return bool(res)
