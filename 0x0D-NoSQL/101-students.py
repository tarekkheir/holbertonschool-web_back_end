#!/usr/bin/env python3
"""Pymongo module"""


def top_students(mongo_collection):
    """return all students"""
    result = mongo_collection.aggregate([
        {"$unwind": {"path": "$topics"}},
        {"$group": {"_id": "$_id",
                    "name": {"$first": "$name"},
                    "averageScore": {"$avg": "$topics.score"}}},
        {"$sort": {"averageScore": -1}}
    ])
    return result
