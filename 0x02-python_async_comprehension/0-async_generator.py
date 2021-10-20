#!/usr/bin/env python3
"""
Async comprehension module
"""

import asyncio
import random


async def async_generator():
    """Generate random number in async function"""
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
