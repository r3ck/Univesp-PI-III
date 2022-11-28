from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.sql.schema import ForeignKey
from sqlalchemy.orm import relationship
from db import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(60))
    email = Column(String(254), unique=True)
    password = Column(String(60))
    activated = Column(Boolean)

    items = relationship("Item", back_populates="owner")


class Item(Base):
    __tablename__ = "item"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(1024))
    description = Column(String(1024))
    image_location = Column(String(1024))
    available = Column(Boolean)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="items")

class About(Base):
    __tablename__ = "about"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(1024))
    description = Column(String(1024))

