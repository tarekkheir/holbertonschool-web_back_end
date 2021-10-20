#!/usr/bin/env python3
"""
Async comprehension module
"""

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """Get the result of a coroutines function and return it"""
    return [i async for i in async_generator()]
