#!/usr/bin/env python3
"""Pagination module"""

import csv
import math
from typing import List, Tuple


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def index_range(self, page: int, page_size: int) -> Tuple[int, int]:
        total_size = page * page_size
        start = (page - 1) * page_size
        return (start, total_size)

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        assert isinstance(page, int)
        assert isinstance(page_size, int)
        assert page > 0 and page_size > 0

        index = self.index_range(page, page_size)
        with open('Popular_Baby_Names.csv', newline='') as f:
            reader = csv.DictReader(f.readlines()[index[0]:index[1]+1])
            return [list(row.values()) for row in reader]

        return []
