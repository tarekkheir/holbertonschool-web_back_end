#!/usr/bin/env python3
"""Re1dis with Python module"""


from typing import Union
import redis
import uuid


class Cache():
    """Cache class"""

    def __init__(self):
        """initial class execution"""
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Generate uuid key and store data in Redis DB"""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key
