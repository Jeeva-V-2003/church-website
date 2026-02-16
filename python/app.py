from flask import Flask, render_template, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/resources')
def resources():
    return render_template('resources.html')

@app.route('/bible-study')
def bible_study():
    return render_template('bible_study.html')

@app.route('/magazine')
def magazine():
    return render_template('magazine.html')

@app.route('/conventions')
def conventions():
    return render_template('conventions.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/daily-manna')
def daily_manna():
    return render_template('daily_manna.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
