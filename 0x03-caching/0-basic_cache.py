#!/usr/bin/python3
""" BaseCaching module"""


from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """caching system"""

    def put(self, key, item):
        """Add item in the cache"""
        if key and item:
            self.cache_data.update({key: item})

    def get(self, key):
        """Get item from the cache"""
        if key and key in self.cache_data.keys():
            return self.cache_data[key]
        else:
            return None
