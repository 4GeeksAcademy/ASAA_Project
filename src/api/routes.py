"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



@api.route('/users', methods=['GET'])
def user_list():
    users = db.session.execute(db.select(User).order_by(User.email)).scalars()
    result = [user.serialize() for user in users]
    response_body = {
        "Message": "Registered Users List", 
        "users": result

    }
    return response_body




#crear ruta register metodo post y crear ruta para el token=donde hay que validar si el email i el password son correctos

# Ruta Registrar User

@api.route('/signup', methods=['POST'])
def signup():
    email = request.json["email"]
    password = request.json["password"]
   
    user_exists = User.query.filter_by(email=email).first() 
   
    if user_exists is not None: 
        return jsonify({"error": "Email already exists"}), 409
       
    new_user = User(email=email, password=password)
    new_user.is_active = True
    try:
        db.session.add(new_user)
        db.session.commit()
        
        return jsonify({"message": "Success"}), 200
    except Exception as error:
        print(error)
        return jsonify({"error": "Error creating user"}), 400
    

# Ruta Token validar email y password

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if email == None or password == None:
        return jsonify({"Message": "Wrong email or password"}), 401
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)
    
# Ruta Login

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    
    if user is None:
        return jsonify({"error": "Wrong email or passwords"}), 401
           
    access_token = create_access_token(identity=email)
  
    return jsonify({
        "email": email,
        "access_token": access_token
    })

# Ruta Logout

@api.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"Message": "Logout successful"})
    return response

# Ruta Private

@api.route("/private", methods=["GET"])
@jwt_required()
def get_Private():
    email = get_jwt_identity()
    dictionary = {"Message": email}
    return jsonify(dictionary)