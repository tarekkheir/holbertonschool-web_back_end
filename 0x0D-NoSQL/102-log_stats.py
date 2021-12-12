#!/usr/bin/env python3
"""Pymongo module"""

from pymongo import MongoClient


client = MongoClient('mongodb://127.0.0.1:27017')
logs = client.logs

if __name__ == "__main__":
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print("{:d} logs".format(logs.nginx.count_documents({})))
    print("Methods:")
    for method in methods:
        print("\tmethod {:s}: {:d}".format(
            method, logs.nginx.count_documents({"method": method})))

    print("{} status check".format(logs.nginx.count_documents(
        {"method": "GET", "path": "/status"})))

    ips = logs.nginx.aggregate([
        {"$group": {"_id": "$ip", "ip_num": {"$sum": 1}}},
        {"$sort": {"ip_num": -1}},
        {"$limit": 10}
    ])

    print("IPs:")
    for ip in ips:
        print("\t{}: {}".format(ip.get('_id'), ip.get('ip_num')))
