#!/usr/bin/env python3
"""Encrypt password module"""

import bcrypt


def hash_password(password: str) -> bytes:
    """return a salted and hashed password which is a byte string"""
    password = bytes(password, 'utf-8')
    hashed = bcrypt.hashpw(password, bcrypt.gensalt())

    return hashed


def is_valid(hashed_password: bytes, password: str) -> bool:
    """validate the provided password with hashed password"""
    if bcrypt.checkpw(password.encode('utf-8'), hashed_password):
        return True
    else:
        return False
