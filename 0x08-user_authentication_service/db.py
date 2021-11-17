#!/usr/bin/env python3
"""DB module"""

from typing import List
from sqlalchemy import create_engine
from sqlalchemy.exc import InvalidRequestError
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm.session import Session
from user import Base, User
from sqlalchemy.orm.exc import NoResultFound


class DB:
    """DB class
    """

    args_list = [
        "id",
        "email",
        "hashed_password",
        "session_id",
        "reset_token"
    ]

    def __init__(self) -> None:
        """Initialize a new DB instance
        """
        self._engine = create_engine("sqlite:///a.db", echo=True)
        Base.metadata.drop_all(self._engine)
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    def _session(self) -> Session:
        """Memoized session object
        """
        if self.__session is None:
            DBSession = sessionmaker(bind=self._engine)
            self.__session = DBSession()
        return self.__session

    def add_user(self, email: str, hashed_password: str) -> User:
        """add user to the database and return a user object"""
        user = User(email=email, hashed_password=hashed_password)

        self._session.add(user)
        self._session.commit()

        return user

    def find_user_by(self, **args: List[str]) -> User:
        """find user by field in users tables"""

        if args is None:
            raise InvalidRequestError

        for arg in args:
            if arg not in self.args_list:
                raise InvalidRequestError
        try:
            user = self._session.query(User).filter_by(**args).one()

        except NoResultFound:
            raise NoResultFound

        return user
