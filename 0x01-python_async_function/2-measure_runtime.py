#!/usr/bin/env python3
"""
Asynchronous coroutine Module
"""

import time
from asyncio import run

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the runtime 
    """

    start: float = time.time()
    run(wait_n(n, max_delay))
    end: float = time.time()

    return (end - start) / n
