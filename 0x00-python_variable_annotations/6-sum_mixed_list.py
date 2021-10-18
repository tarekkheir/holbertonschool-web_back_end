#!/usr/bin/env python3
"""
Type-annoted finctions module
"""

from typing import Union, List


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """return sum of mixed list argument"""
    s: float = 0
    for i in mxd_list:
        s = s + i
    return s
