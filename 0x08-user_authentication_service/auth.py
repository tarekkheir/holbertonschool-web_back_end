#!/usr/bin/env python3
"""User authenfication service module"""


from db import DB
from user import User
import bcrypt


def _hash_password(password: str) -> bytes:
    """hashed password"""
    passwd = str.encode(password)
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(passwd, salt)

    return hashed


class Auth:
    """Auth class to interact with the authentication database.
    """

    def __init__(self):
        self._db = DB()

    def register_user(self, email: str, password: str) -> User:
        """add user to database"""
        if self._db.find_user_by(email=email):
            return self._db.add_user(email, _hash_password(password))
        else:
            raise ValueError("User {} already exists").format(email)
