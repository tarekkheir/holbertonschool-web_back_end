#!/usr/bin/env python3
"""Basic Flask app"""


from flask import Flask
from flask.globals import request
from flask.helpers import make_response, url_for
from flask.json import jsonify
from flask import abort, redirect
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


@app.route('/sessions', methods=['DELETE'])
def logout():
    """ DELETE /sessions """
    user = AUTH.get_user_from_session_id(request.cookies["session_id"])
    if user:
        AUTH.destroy_session(user.id)
        return redirect(url_for('welcome'))
    else:
        abort(403)


@app.route('/profile', methods=['GET'])
def profile():
    """ GET /profile """
    user = AUTH.get_user_from_session_id(request.cookies["session_id"])
    if user:
        return jsonify({"email": user.email}), 200
    else:
        abort(403)


@app.route('/reset_password', methods=['PUT'])
def update_password():
    """ POST /reset_password """
    email = request.form['email']
    reset_token = request.form['reset_token']
    new_password = request.form['new_password']
    try:
        AUTH.update_password(reset_token, new_password)
        return jsonify({"email": email, "message": "Password updated"}), 200
    except ValueError:
        abort(403)


@app.route('/reset_password', methods=['PUT'])
def update_password():
    """ PUT /reset_password """
    email = request.form['email']
    reset_token = request.form['reset_token']
    new_password = request.form['new_password']
    try:
        AUTH.update_password(reset_token, new_password)
        return jsonify({"email": email, "message": "Password updated"}), 200
    except ValueError:
        abort(403)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
