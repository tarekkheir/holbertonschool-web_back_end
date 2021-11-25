#!/usr/bin/env python3
"""i18n module"""


from flask import Flask, render_template
from flask_babel import Babel


app = Flask(__name__)
# app.config.from_pyfile('')


@app.route('/', methods=['GET'], strict_slashes=False)
def hello_world():
    """Get method /"""
    return render_template('0-index.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
