#!/usr/bin/env python3
"""Pymongo module"""

from pymongo.collection import Collection


def list_all(mongo_collection: Collection):
    """function that lists all documents in a collection"""
    return [i for i in mongo_collection.find()]
