#!/usr/bin/env python3
"""
Asynchronous coroutine Module
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    that waits for a random delay between 0 and max_delay
    seconds and eventually returns it.
    """
    rand: float = random.uniform(0, max_delay)
    await asyncio.sleep(rand)

    return rand
