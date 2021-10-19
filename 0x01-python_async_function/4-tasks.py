#!/usr/bin/env python3
"""
Asynchronous coroutine Module
"""

from typing import List
from asyncio import gather

wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    The code is nearly identical to wait_n except
    task_wait_random is being called.
    """

    return sorted(await gather(*[wait_random(max_delay) for i in range(n)]))
