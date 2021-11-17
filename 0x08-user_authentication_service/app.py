#!/usr/bin/env python3
"""Basic Flask app"""


from flask import Flask
from flask.globals import request
from flask.helpers import make_response
from flask.json import jsonify
from flask import abort
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
        return jsonify({"email": request.form['email'],
                        "message": "user created"})
    except ValueError:
        return jsonify({"message": "email already registered"}), 400


@app.route('/sessions', methods=['POST'])
def login():
    """POST /sessions"""
    email = request.form['email']
    password = request.form['email']

    if AUTH.valid_login(email, password) is False:
        abort(401)

    session_id = AUTH.create_session(email, password)
    res = make_response({"email": email, "message": "logged in"})
    res.set_cookie("session_id", session_id)
    return res


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
