#!usr/bin/python3
"""SQLAlchemy model"""


from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from sqlalchemy.sql.expression import false
from sqlalchemy.sql.schema import ColumnCollectionConstraint


Base = declarative_base()


class User(Base):
    """User class"""
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String(250), nullable=False)
    hashed_password = Column(String(250), nullable=False)
    session_id = Column(String(250), nullable=True)
    reset_token = Column(String(250), nullable=True)
