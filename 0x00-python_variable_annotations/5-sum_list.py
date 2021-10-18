#!/usr/bin/env python3
"""
Type-annoted functions module
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """return sum of the list argument"""
    s: float = 0
    for i in input_list:
        s = s + i
    return s
