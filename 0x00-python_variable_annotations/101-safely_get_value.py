#!/usr/bin/env python3
"""
Type-annoted finctions module
"""

from typing import Mapping, Any, Union, TypeVar

T = TypeVar("T")


def safely_get_value(dct: Mapping[str, str], key: Any, default: Union[T, None] = None) -> Union[Any, T]:
    if key in dct:
        return dct[key]
    else:
        return default
