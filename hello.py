from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return "hello world!"

@app.route('/add')
def addStrategy():
    return render_template("index.html")