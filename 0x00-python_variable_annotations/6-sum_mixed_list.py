#!/usr/bin/env python3
"""
Type-annoted finctions module
"""

from typing import Union


def sum_mixed_list(mxd_list: Union[int, float]) -> float:

    s: float = 0
    for i in mxd_list:
        s = s + i
    return s
