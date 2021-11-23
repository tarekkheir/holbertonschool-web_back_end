#!/usr/bin/env python3
"""Unittests"""

import unittest
from unittest.mock import Mock, patch
from parameterized import parameterized
from requests.models import Response
from utils import access_nested_map, get_json


class TestAccessNestedMap(unittest.TestCase):
    """class that will test access_nested_map function"""

    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {'b': 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2)
    ])
    def test_access_nested_map(self, nested_map, path, expected):
        """first test"""
        self.assertEqual(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, ("a",), KeyError),
        ({"a": 1}, ("a", "b"), 1)
    ])
    def test_access_nested_map_exception(self, nested_map, path, expected):
        """second test"""
        self.assertRaises(KeyError)

    class TestGetJson(unittest.TestCase):
        """class that will test get_json fucntion"""
        @parameterized.expand([
            ("http://example.com", {"payload": True}),
            ("http://holberton.io", {"payload": False})
        ])
        def test_get_json(self, test_url, test_payload):
            """first test"""
            response_mock = Mock()
            response_mock.json.return_value = test_payload

            with patch('utils.requests') as mock_requests:
                mock_requests.get.return_value = response_mock
                self.assertEqual(get_json(test_url), test_payload)
                assert mock_requests.get.call_count == 1


if __name__ == "__main__":
    unittest.main()
