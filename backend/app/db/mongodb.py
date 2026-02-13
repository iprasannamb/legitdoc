"""
MongoDB connection module.

Provides async Motor client lifecycle management and database dependency injection.
"""

from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

from app.core.config import settings

# ── Module-level state ───────────────────────────────────────────────────────
_client: AsyncIOMotorClient | None = None
_database: AsyncIOMotorDatabase | None = None

DATABASE_NAME = "legitdoc"


async def connect_db() -> None:
    """
    Initialise the Motor client and create indexes.

    Called once during application startup.
    """
    global _client, _database

    _client = AsyncIOMotorClient(settings.MONGO_URI)
    _database = _client[DATABASE_NAME]

    # Ensure unique index on username for fast look-ups and constraint enforcement
    await _database.users.create_index("username", unique=True)

    print(f"[MongoDB] Connected to {settings.MONGO_URI}/{DATABASE_NAME}")


async def close_db() -> None:
    """
    Close the Motor client gracefully.

    Called once during application shutdown.
    """
    global _client, _database

    if _client is not None:
        _client.close()
        _client = None
        _database = None

    print("[MongoDB] Connection closed")


def get_database() -> AsyncIOMotorDatabase:
    """
    Return the database instance for FastAPI dependency injection.

    Raises:
        RuntimeError: If called before ``connect_db()``.
    """
    if _database is None:
        raise RuntimeError("Database is not initialised. Call connect_db() first.")
    return _database
