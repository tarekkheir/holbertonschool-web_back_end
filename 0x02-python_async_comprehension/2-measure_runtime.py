#!/usr/bin/env python3
"""
Async comprehension module
"""

import time
import asyncio


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """Measure runtime to call coroutines function"""
    start: float = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end: float = time.time()
    return (end - start)
