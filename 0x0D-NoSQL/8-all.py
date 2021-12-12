#!/usr/bin/env python3
"""Pymongo module"""


def list_all(mongo_collection):
    """function that lists all documents in a collection"""
    return [i for i in mongo_collection.find()]
