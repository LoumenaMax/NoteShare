#!/usr/bin/env python
import json
import os
from flask import Flask, render_template, request, make_response, jsonify
from flaskext.mysql import MySQL
from werkzeug import generate_password_hash, check_password_hash

mysql = MySQL()
app = Flask(__name__)

app.config['MYSQL_DATABASE_USER'] = 'LoumenaMax'
app.config['MYSQL_DATABASE_PASSWORD'] = 'password'
app.config['MYSQL_DATABASE_DB'] = 'NoteShare'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

# Takes in the request and a list of variable names you want from the request and
# outputs a tuple that either contains the varibles from the request or an error
# that shows that the variables were not in the request
#
# Ex: Input: getRequestVariables(request, ["username"])
# Ex: Good Output: (False, "xXExampleUsernameXx")
# Ex: Bad Output: (True, "Enter the required fields")
def getRequestVariables( request, varNames, nullFlag ):
    try:
        post_data = request.get_json()
        instantiatedNames = []
        for name in varNames:
            real_data = post_data.get(name)
            if real_data or nullFlag:
                instantiatedNames.append(real_data)
            else:
                return True, "Enter the required fields"
    except Exception as e:
        return True, e
    return False, instantiatedNames

# Takes in a procedure name, a flag for if you will fetch one or fetch all from
# the procedure, and a list of varibles to pass into the procedure, and returns
# the result
def getData( procName, oneFlag, instantiatedNames ):
    conn = None
    cursor = None
    data = None
    errorFlag = False
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.callproc(procName,tuple(instantiatedNames) if instantiatedNames else tuple([]))
        if oneFlag:
            data = cursor.fetchone()
        else:
            data = cursor.fetchall()
    except Exception as e:
        errorFlag = True
        data = e
    finally:
        conn.commit() if cursor else None;
        cursor.close() if cursor else None;
        conn.close() if conn else None;
    return (errorFlag, data)

@app.route('/example', methods = ['POST'])
def test():
    post_data = request.get_json()
    return make_response(jsonify(
        {
            'message': post_data.get('ex')+"ABC"
        }))

@app.route('/register',methods=['POST'])
def signUp():
    instantiatedNames = getRequestVariables(request, ["email", "password"], False)
    if instantiatedNames[0]:
        return make_response(jsonify({'error': str(instantiatedNames[1])}))

    username_password = instantiatedNames[1]
    username_password[1] = generate_password_hash(username_password[1])

    data = getData('sp_createUser', False, username_password)
    if data[0]:
        return make_response(jsonify({'error': str(data[1])}))
    data = data[1]

    if len(data) is 0:
        return make_response(jsonify(
            {
                'message': 'User created successfully'
            }))
    else:
        return make_response(jsonify(
            {
                'error': data[0][0]
            }))

@app.route('/login',methods=['POST'])
def login():
    instantiatedNames = getRequestVariables(request, ["email", "password"], False)
    if instantiatedNames[0]:
        return make_response(jsonify(
            {
                'error': str(instantiatedNames[1])
            }))
    username_password = instantiatedNames[1]
    data = getData('sp_getLoginInfo', True, username_password[0:1])
    if data[0]:
        return make_response(jsonify({'error': str(data[1])}))
    data = data[1]

    if data[1] is None:
        return make_response(jsonify(
            {
                'error': 'No user found'
            }))
    elif check_password_hash(data[2], username_password[1]):
        return make_response(jsonify({'user': data[1]}))
    else:
        return make_response(jsonify({'error': 'Incorrect Password'}))

@app.route('/searchClasses',methods=['POST'])
def searchClasses():
    instantiatedNames = getRequestVariables(request, ["school_id"], False)
    if instantiatedNames[0]:
        return make_response(jsonify(
            {
                'error': str(instantiatedNames[1])
            }))
    _school_id = instantiatedNames[1]
    data = getData('sp_getClasses', False, _school_id)
    if data[0]:
        return make_response(jsonify({'error': str(data[1])}))
    data = data[1]

    if data[0] == "School does not exist":
        return make_response(jsonify(
            {
                'error': data[0]
            }))
    else:
        return make_response(jsonify(
            {
                'classes': data
            }))

@app.route('/searchSchools',methods=['GET'])
def searchSchools():
    data = getData('sp_getSchools', False, [])
    if data[0]:
        return make_response(jsonify({'error': str(data[1])}))
    data = data[1]

    if len(data) is not 0:
        return make_response(jsonify(
            {
                'schools': data
            }))
    else:
        return make_response(jsonify(
            {
                'schools': []
            }))

@app.route('/createUserInfo',methods=['POST'])
def createUserInfo():
    instantiatedNames = getRequestVariables(request, ["user_id", "display_name", "real_name", "email", "phone_number"], True)
    if instantiatedNames[0]:
        return make_response(jsonify(
            {
                'error': str(instantiatedNames[1])
            }))
    user_info = instantiatedNames[1]
    data = getData('sp_createUserInfo', False, user_info)
    if data[0]:
        return make_response(jsonify({'error': str(data[1])}))
    data = data[1]

    if len(data) is 0:
        return make_response(jsonify(
            {
                'message': 'UserInfo created successfully'
            }))
    else:
        return make_response(jsonify(
            {
                'error': data[0][0]
            }))

@app.route('/createSchool',methods=['POST'])
def createSchool():
    instantiatedNames = getRequestVariables(request, ["school_name"], False)
    if instantiatedNames[0]:
        return make_response(jsonify({'error': str(instantiatedNames[1])}))

    school_info = instantiatedNames[1]
    data = getData('sp_createSchool', False, school_info)
    if data[0]:
        return make_response(jsonify({'error': str(data[1])}))
    data = data[1]

    if len(data) is 0:
        return make_response(jsonify(
            {
                'message': 'School created successfully'
            }))
    else:
        return make_response(jsonify(
            {
                'error': data[0][0]
            }))

@app.route('/createClass',methods=['POST'])
def createClass():
    instantiatedNames = getRequestVariables(request, ["school_id", "class_name"], False)
    if instantiatedNames[0]:
        return make_response(jsonify({'error': str(instantiatedNames[1])}))
    class_info = instantiatedNames[1]

    data = getData('sp_createClass', False, class_info)
    if data[0]:
        return make_response(jsonify({'error': str(data[1])}))
    data = data[1]

    if len(data) is 0:
        return make_response(jsonify(
            {
                'message': 'Class created successfully'
            }))
    else:
        return make_response(jsonify(
            {
                'error': data[0][0]
            }))

@app.route('/createPost',methods=['POST'])
def createPost():
    instantiatedNames = getRequestVariables(request, ["date_sold", "author_id", "class_id", "name"], False)
    if instantiatedNames[0]:
        return make_response(jsonify({'error': str(instantiatedNames[1])}))
    post_info = instantiatedNames[1]

    data = getData('sp_createPost', False, post_info)
    if data[0]:
        return make_response(jsonify({'error': str(data[1])}))
    data = data[1]

    if len(data) is 0:
        return make_response(jsonify(
            {
                'message': 'Post created successfully'
            }))
    else:
        return make_response(jsonify(
            {
                'error': data[0][0]
            }))

@app.route('/savePost',methods=['POST'])
def savePost():
    instantiatedNames = getRequestVariables(request, ["user_id", "post_id"], False)
    if instantiatedNames[0]:
        return make_response(jsonify({'error': str(instantiatedNames[1])}))
    save_info = instantiatedNames[1]

    data = getData('sp_savePost', False, save_info)
    if data[0]:
        return make_response(jsonify({'error': str(data[1])}))
    data = data[1]

    if len(data) is 0:
        return make_response(jsonify(
            {
                'message': 'Post saved successfully'
            }))
    else:
        return make_response(jsonify(
            {
                'error': data[0][0]
            }))

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 8000), debug=True)
