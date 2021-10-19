#!/usr/bin/env python3
"""
Asynchronous coroutine Module
"""

from asyncio import Task, create_task

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> Task:
    """
    Write a function task_wait_random that takes
    an integer max_delay and returns a asyncio.Task
    """

    return create_task(wait_random(max_delay))
