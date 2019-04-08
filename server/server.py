#!/usr/bin/env python
import json
import os
from flask import Flask, render_template, request, make_response, jsonify
from flaskext.mysql import MySQL
from werkzeug import generate_password_hash, check_password_hash

mysql = MySQL()
app = Flask(__name__)

app.config['MYSQL_DATABASE_USER'] = 'LoumenaMax'
app.config['MYSQL_DATABASE_PASSWORD'] = 'ITAOTSm3535'
app.config['MYSQL_DATABASE_DB'] = 'NoteShare'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

@app.route('/example', methods = ['POST'])
def test():
    post_data = request.get_json()
    return make_response(jsonify(
        {
            'message': post_data.get('ex')+"ABC"
        }))

@app.route('/register',methods=['POST','GET'])
def signUp():
    try:
        post_data = request.get_json()
        _name = post_data.get("name")
        _email = post_data.get("email")
        _password = post_data.get("password")

        # validate the received values
        if _name and _email and _password:

            # All Good, let's call MySQL

            conn = mysql.connect()
            cursor = conn.cursor()
            _hashed_password = generate_password_hash(_password)
            print(_hashed_password)
            cursor.callproc('sp_createUser',(_name,_email,_hashed_password))
            data = cursor.fetchall()

            if len(data) is 0:
                conn.commit()
                return make_response(jsonify(
                    {
                        'message': 'User created successfully'
                    }))
            else:
                return make_response(jsonify(
                    {
                        'error': str(data[0])
                    }))
        else:
            return make_response(jsonify(
                {
                    'message': 'Enter the required fields'
                }))

    except Exception as e:
        return make_response(jsonify(
            {
                'error': str(e)
            }))
    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 8000), debug=True)
