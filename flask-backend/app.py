from flask import Flask, render_template, session, jsonify, request
from Kraken import kraken_request
import os
import time

App = Flask(__name__)
App.secret_key = "secret_key"


@App.route('/')
@App.route('/<path:path>')
def index(path=None):
    return render_template('index.html')


@App.route('/Api/<key>/<option>', methods=["GET", "POST"])
def Api(key, option):
    if "loggedIn" not in session:
        session["loggedIn"] = False

    if key == "54657687969758647563":
        if option == "getBalance":
            if request.method == "GET" or request.method == "POST":

                api_key = session["apiKey"]
                api_sec = session["secretKey"]

                # Construct the request and print the result
                resp = kraken_request('/0/private/Balance', {
                    "nonce": str(int(1000*time.time()))
                }, api_key, api_sec)

                return {"Response": resp.json()}
            return {"Error": "Request required"}
        elif option == "getTrades":
            if request.method == "GET" or request.method == "POST":

                api_key = session["apiKey"]
                api_sec = session["secretKey"]

                # Construct the request and print the result
                resp = kraken_request('/0/private/TradesHistory', {
                    "nonce": str(int(1000*time.time()))
                }, api_key, api_sec)
                return {"Response": resp.json()}
            return {"Error": "Request required"}
        elif option == "login":
            if request.method == "POST":
                Api_Key = request.json["ApiKey"]
                Secret_Key = request.json["SecretKey"]

                session["loggedIn"] = True
                session["apiKey"] = Api_Key
                session["secretKey"] = Secret_Key

                return {"Response": "Logged in"}
            return {"Error": "POST request required"}
        elif option == "loggedIn":
            if request.method == "POST":
                return {"Response": session["loggedIn"]}
            return {"Response": session["loggedIn"]}
        elif option == "logout":
            session.pop("loggedIn")
            session.pop("apiKey")
            session.pop("secretKey")
            return {"Response": "Cleared session"}
        return {"Error": "No option with that name"}
    return {"Error": "Wrong key"}


if __name__ == '__main__':
    App.run(debug=True, host="0.0.0.0", port=5000)
