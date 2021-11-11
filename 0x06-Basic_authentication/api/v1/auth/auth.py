#!/usr/bin/env python3
"""Authentification Class"""

from typing import List, TypeVar
from flask import request


class Auth():
    """Manage the API authentification"""

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """prototype"""
        if path and excluded_paths:
            if not path.endswith('/'):
                path += '/'

            for e in excluded_paths:
                if not e.endswith('/'):
                    e += '/'

                if excluded_path.endswith('*'):
                    excluded_path = excluded_path[0:-1]

                if path == e:
                    return False
        return True

    def authorization_header(self, request=None) -> str:
        """prototype"""
        if request:
            if request.headers.get("Authorization"):
                return request.headers.get("Authorization")
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """prototype"""
        return None
