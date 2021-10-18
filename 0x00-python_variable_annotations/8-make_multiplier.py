#!/usr/bin/env python3
"""
Type-annoted finctions module
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """return function"""
    return lambda x: multiplier * x
