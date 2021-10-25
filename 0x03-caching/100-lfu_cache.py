#!/usr/bin/python3
""" BaseCaching module"""


from base_caching import BaseCaching


class LFUCache(BaseCaching):
    """caching system"""

    def __init__(self):
        super().__init__()
        self.history = {}

    def put(self, key, item):
        """Add item in the cache"""
        if key and item:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:

                if self.history and key in self.history.keys():
                    self.history[key] += 1
                else:
                    values = sorted(self.history.values())
                    s = {}

                    for i in values:
                        for k in self.history.keys():
                            if self.history[k] == i:
                                s[k] = self.history[k]
                                break

                    k = list(s.keys())[0]
                    self.cache_data.pop(k)
                    self.history.pop(k)
                    self.history.update({key: 1})
                    print("DISCARD: " + k)

                self.cache_data.update({key: item})

            else:
                self.cache_data.update({key: item})
                if key in self.history:
                    self.history[key] += 1
                else:
                    self.history.update({key: 1})

    def get(self, key):
        """Get item from the cache"""
        if key and key in self.cache_data.keys():

            if self.history and key in self.history.keys():
                self.history[key] += 1

            return self.cache_data[key]
        else:
            return None
