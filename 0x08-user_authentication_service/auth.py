#!/usr/bin/env python3
"""User authenfication service module"""


from typing import Union
from db import DB
from user import User
import bcrypt
import uuid


def _hash_password(password: str) -> bytes:
    """hashed password"""
    passwd = str.encode(password)
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(passwd, salt)

    return hashed


def _generate_uuid() -> str:
    """ return uuid """
    return uuid.uuid4()


class Auth:
    """Auth class to interact with the authentication database.
    """

    def __init__(self):
        self._db = DB()

    def register_user(self, email: str, password: str) -> User:
        """add user to database"""
        try:
            self._db.find_user_by(email=email)

        except Exception:
            return self._db.add_user(email, _hash_password(password))

        raise ValueError("User {} already exists".format(email))

    def valid_login(self, email: str, password: str) -> bool:
        """check if logins are valid"""
        try:
            user: User = self._db.find_user_by(email=email)
            return bcrypt.checkpw(str.encode(password), user.hashed_password)

        except Exception:
            return False

    def create_session(self, email: str) -> str:
        try:
            user = self._db.find_user_by(email=email)
            session_id = str(_generate_uuid())
            self._db.update_user(user.id, session_id=session_id)
            return session_id
        except Exception:
            return None

    def get_user_from_session_id(self, session_id: str) -> Union[User, None]:
        """get user by session id"""
        if session_id:
            try:
                user = self._db.find_user_by(session_id=session_id)
                return user
            except:
                return None
        return None

    def destroy_session(self, user_id: int) -> None:
        """Destroy user session"""
        if user_id:
            try:
                user = self._db.find_user_by(user_id=user_id)
                self._db.update_user(user_id, session_id=None)
            except:
                return None
        return None

    def get_reset_password_token(self, email: str) -> str:
        """ Reset password token """
        try:
            user = self._db.find_user_by(email=email)
            token = _generate_uuid()
            self._db.update_user(user.id, reset_token=token)
            return str(token)
        except Exception:
            raise ValueError

    def update_password(self, reset_token: str, password: str) -> None:
        """ Update password """
        try:
            user = self._db.find_user_by(reset_token=reset_token)
            self._db.update_user(user.id,
                                 hashed_password=_hash_password(password),
                                 reset_token=None)
        except Exception:
            raise ValueError
        return None
