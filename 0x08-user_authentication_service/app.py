#!/usr/bin/env python3
"""Basic Flask app"""


from flask import Flask
from flask import json
from flask.globals import request
from flask.json import jsonify
from auth import Auth


app = Flask(__name__)
AUTH = Auth()


@app.route('/')
def welcome():
    """ / GET """
    return jsonify({"message": "Bienvenue"})


@app.route('/users', methods=['POST'])
def users():
    """POST /users"""
    try:
        user = AUTH.register_user(
            request.form['email'], request.form['password'])
        return jsonify({"email": request.form["email"], "message": "user created"})
    except ValueError:
        return jsonify({"message": "email already registered"}), 400


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
