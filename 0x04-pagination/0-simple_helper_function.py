#!/usr/bin/env python3
"""Pagination module"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    total_size = page * page_size
    start = (page - 1) * page_size
    return (start, total_size)
