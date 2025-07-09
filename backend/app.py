from flask import Flask, request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/register', methods=['POST'])
def login():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    confirmpassword = data.get('confirmpassword')

    if not name or not email or not password or not confirmpassword:
        return jsonify({'success': False, 'message': 'Missing Fields'}), 400

    return jsonify({'success': True, 'message': 'User Registered successfully'})

if __name__=='__main__':
    app.run(debug=True)