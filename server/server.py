#!/usr/bin/env python
import json
import os
from flask import Flask, render_template, request, make_response, jsonify

app = Flask(__name__)

@app.route('/api/example', methods = ['POST'])
def test():
    post_data = request.get_json()
    return make_response(jsonify({'message': post_data.get('ex')+"ABC"}))

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 8000), debug=True)
