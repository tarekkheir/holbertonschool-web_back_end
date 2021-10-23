#!/usr/bin/python3
""" BaseCaching module"""


from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """caching system"""

    def __init__(self):
        super().__init__()
        self.last_key = []

    def put(self, key, item):
        """Add item in the cache"""
        if key and item:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS and key not in self.cache_data.keys():
                if self.last_key:
                    k = self.last_key[0]
                    print("Cache is full")
                else:
                    k = list(self.cache_data.keys())[-1]
                self.cache_data.pop(k)
                self.cache_data.update({key: item})
                self.last_key.clear()
                self.last_key.append(key)
                print("DISCARD: " + k)
            else:
                self.cache_data.update({key: item})
                self.last_key.clear()
                self.last_key.append(key)

    def get(self, key):
        """Get item from the cache"""
        if key and key in self.cache_data.keys():
            return self.cache_data[key]
        else:
            return None
