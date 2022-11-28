from sqlalchemy import create_engine
from models.model import Base
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession

DB_URL = "sqlite:///database.db"
engine = create_engine(DB_URL, echo=True)


def reset_database():
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)


if __name__ == "__main__":
    reset_database()
