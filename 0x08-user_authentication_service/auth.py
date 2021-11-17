#!/usr/bin/env python3
"""User authenfication service module"""


from logging import StringTemplateStyle
import bcrypt


def _hash_password(password: str) -> bytes:
    """hashed password"""
    passwd = str.encode(password)
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(passwd, salt)

    return hashed
