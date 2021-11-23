#!/usr/bin/env python3
"""Unittests"""

import unittest
from unittest.mock import Mock, patch, MagicMock
from parameterized import parameterized
from utils import access_nested_map, get_json, memoize


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

    def response(self, payload):
        response_mock = Mock()
        response_mock.json.return_value = payload
        return response_mock

    @parameterized.expand([("http://example.com", {"payload": True},
                            {"payload": True}),
                           ("http://holberton.io", {"payload": False},
                            {"payload": False})])
    def test_get_json(self, url, payload, expected):
        """first test"""
        with patch('utils.requests') as mock_requests:
            mock_requests.get.return_value = self.response(payload)
            self.assertEqual(get_json(url), expected)
            assert mock_requests.get.call_count == 1


class TestMemoize(unittest.TestCase):
    """summary"""

    def test_memoize(self):
        """summary"""
        class TestClass:
            """summary"""

            def a_method(self):
                """summary"""
                return 42

            @memoize
            def a_property(self):
                """[summary]"""
                return self.a_method()
        c = TestClass()
        c.a_method = MagicMock(return_value=42)
        self.assertEqual(c.a_property, 42)
        self.assertEqual(c.a_property, 42)
        c.a_method.assert_called_once()


if __name__ == "__main__":
    unittest.main()
