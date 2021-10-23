#!/usr/bin/python3
""" BaseCaching module"""


from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """caching system"""

    def __init__(self):
        super().__init__()

    def put(self, key, item):
        """Add item in the cache"""
        if key and item:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                k = list(self.cache_data.keys())[0]
                self.cache_data.pop(k)
                self.cache_data.update({key: item})
                print("DISCARD: " + k)
            else:
                self.cache_data.update({key: item})

    def get(self, key):
        """Get item from the cache"""
        if key and key in self.cache_data.keys():
            return self.cache_data[key]
        else:
            return None
