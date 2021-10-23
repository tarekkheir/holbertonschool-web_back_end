#!/usr/bin/python3
""" BaseCaching module"""


from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """caching system"""

    def __init__(self):
        super().__init__()
        self.history = []

    def put(self, key, item):
        """Add item in the cache"""
        if key and item:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS and key not in self.cache_data.keys():
                k = self.history[-1]
                self.cache_data.pop(k)
                self.cache_data.update({key: item})
                self.history.append(key)
                print("DISCARD: " + k)
            else:
                self.cache_data.update({key: item})
                self.history.append(key)

    def get(self, key):
        """Get item from the cache"""
        if key and key in self.cache_data.keys():
            return self.cache_data[key]
        else:
            return None
