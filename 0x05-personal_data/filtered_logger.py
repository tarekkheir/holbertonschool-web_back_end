#!/usr/bin/env python3
"""Personal Data Module"""

import re
import logging
import os
import mysql.connector
from typing import List


PII_FIELDS = ('name', 'email', 'phone', 'ssn', 'password')


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """method to filter values in incoming
        log records using filter_datum"""
        return filter_datum(self.fields, self.REDACTION,
                            super().format(record), self.SEPARATOR)


def filter_datum(fields: List[str], redaction: str,
                 message: str, separator: str) -> str:
    """returns the log message obfuscated"""
    for f in fields:
        message = re.sub(f'{f}=(.*?){separator}',
                         f'{f}={redaction}{separator}', message)

    return message


def get_logger() -> logging.Logger:
    """function that takes no arguments and returns a logging.Logger object."""
    logger = logging.getLogger('user_data')
    logger.setLevel(level=logging.INFO)
    logger.propagate = False
    ch = logging.StreamHandler()
    ch.setLevel(logging.INFO)
    ch.setFormatter(RedactingFormatter)
    logger.addHandler(ch)

    return logger


def get_db() -> mysql.connector.connection.MySQLConnection:
    """function that returns a connector to the database"""
    host = os.environ["PERSONAL_DATA_DB_HOST"]
    user = os.environ["PERSONAL_DATA_DB_USERNAME"]
    passwd = os.environ["PERSONAL_DATA_DB_PASSWORD"]
    db_name = os.environ["PERSONAL_DATA_DB_NAME"]
    connect = mysql.connector.connect(
        host=host,
        user=user,
        passwd=passwd,
        database=db_name
    )

    return connect


if __name__ == "__main__":

    db = get_db()
    cursor = db.cursor()
    query = "SELECT group_concat(COLUMN_NAME) FROM INFORMATION_SCHEMA.COLUMNS\
            WHERE TABLE_SCHEMA = 'my_db' AND TABLE_NAME = 'users';"
    cursor.execute(query)

    for c in cursor:
        key = c[0]

    key = key.split(',')
    cursor.execute("SELECT * FROM users;")

    for c in cursor:
        m = [f'{k}={v}' for k, v in zip(key, c)]
        message = "; ".join(m)
        message += ';'
        log = logging.LogRecord("user_data", logging.INFO,
                                None, None, message, None, None)

        format = RedactingFormatter(
            fields=("name", "email", "phone", "ssn", "password"))

        print(format.format(log))

    cursor.close()
    db.close()
