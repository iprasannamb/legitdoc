"""
Application configuration module.

Loads all environment variables via Pydantic Settings with sensible defaults.
"""

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings loaded from environment variables / .env file."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
    )

    # ── MongoDB ──────────────────────────────────────────────────────────
    MONGO_URI: str = "mongodb://localhost:27017"

    # ── JWT ──────────────────────────────────────────────────────────────
    JWT_SECRET: str = "SECRET_KEY"
    JWT_ALGORITHM: str = "HS256"

    # ── Token Expiry ─────────────────────────────────────────────────────
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7


settings = Settings()
