from flask import Flask, render_template, session

App = Flask(__name__)
App.secret_key = "secret_key"

@App.route('/')
@App.route('/<path:path>')
def index(path=None):
    return render_template('index.html')

@App.route('/Api/<key>/<option>', methods=["GET", "POST"])
def Api(key, option):
    if key == "54657687969758647563":
        if option == "getSession":
            return session
        return {"Error": "No option with that name"}
    return {"Error": "Wrong key"}

if __name__ == '__main__':
    App.run(debug=True)
