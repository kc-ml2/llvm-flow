from sqlalchemy import create_engine
from sqlmodel import Session

from app.core.config import settings

engine = create_engine(
    settings.SQLALCHEMY_DATABASE_URI, connect_args={"check_same_thread": False}
)


def get_db():
    with Session(engine, autocommit=False, autoflush=False) as session:
        yield session
