#!/usr/bin/env python3
"""Web cache and tracker"""


from typing import Callable
from functools import wraps
import requests
import redis


r = redis.Redis()


def count_decorators(method: Callable) -> Callable:
    """store in cache url requested"""
    @wraps(method)
    def wrapper(self, *args) -> bytes:
        """wrapper"""
        url = args[0]
        key = f"count:{url}"
        r.incr(key)
        get_page_execution = method(*args)
        r.setex(url, 10, get_page_execution)
        return get_page_execution

    return wrapper


@count_decorators
def get_page(url: str) -> str:
    """track how many time a particular URL
    was accessed and cache the result"""
    res = requests.get(url)
    return res.text
