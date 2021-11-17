#!/usr/bin/env python3
""" DB module. """
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm.exc import NoResultFound
from typing import List
from sqlalchemy.orm.session import Session
from typing import Union

from user import Base, User


class DB:
    """ DB class. """

    def __init__(self) -> None:
        """ Initialize a new DB instance """
        self._engine = create_engine("sqlite:///a.db", echo=False)
        Base.metadata.drop_all(self._engine)
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    def _session(self) -> Session:
        """ Memorized session object """
        if self.__session is None:
            DBSession = sessionmaker(bind=self._engine)
            self.__session = DBSession()
        return self.__session

    def add_user(self, email: str, hashed_password: str) -> User:
        """ Add a user to the DataBase and return the user object """
        user = User(email=email, hashed_password=hashed_password)
        self._session.add(user)
        self._session.commit()
        return user

    def find_user_by(self, **args: List[str]) -> User:
        """find user by field in users tables"""
        try:
            user = self._session.query(User).filter_by(**args).one()

        except NoResultFound:
            raise NoResultFound

        return user
