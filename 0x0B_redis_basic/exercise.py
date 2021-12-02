#!/usr/bin/env python3
"""Re1dis with Python module"""


from typing import Callable, Optional, Union
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

    def get(self, key: str, fn: Optional[Callable] = None) -> str:
        """Return data in the desired format"""
        if self._redis.exists(key):
            if fn:
                return fn(self._redis.get(key))
            else:
                return self._redis.get(key)
        return None

    def get_str(self, key: str) -> str:
        """return data in str format"""
        return self.get(key, str)

    def get_int(self, key: int) -> int:
        """return data in int format"""
        return self.get(key, int)
