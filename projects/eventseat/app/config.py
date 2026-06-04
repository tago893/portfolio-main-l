from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    database_url: str = "postgresql+asyncpg://eventseat:eventseat@localhost:5432/eventseat"
    redis_url: str = "redis://localhost:6379/0"
    hold_ttl_seconds: int = 120

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
