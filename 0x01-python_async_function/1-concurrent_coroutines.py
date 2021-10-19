#!/usr/bin/env python3
"""
Asynchronous coroutine Module
"""

from typing import List
from asyncio import gather

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    execute multiple coroutines at the same time with async 
    """

    return sorted(await gather(*[wait_random(max_delay) for i in range(n)]))
