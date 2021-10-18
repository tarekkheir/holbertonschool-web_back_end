#!/usr/bin/env python3
"""
Type-annoted finctions module
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """return Tuple of arguments"""
    return (k, v ** 2)
