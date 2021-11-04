#!/usr/bin/env python3
"""Authentification Class"""

from typing import List, TypeVar
from flask import request


class Auth():
    """Manage the API authentification"""

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """prototype"""
        return False

    def authorization_header(self, request=None) -> str:
        """prototype"""
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """prototype"""
        return None
