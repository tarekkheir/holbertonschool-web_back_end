#!/usr/bin/env python3
"""User authenfication service module"""


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
    """return uuid"""
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
