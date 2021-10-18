#!/usr/bin/env python3
"""
Type-annoted finctions module
"""

from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """return a list of Tuple"""
    return [(i, len(i)) for i in lst]
