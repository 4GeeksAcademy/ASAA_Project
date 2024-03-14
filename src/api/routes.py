"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cliente, Camarero, Mesa, Producto, Pedido, Menu, ProductoPedido
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import uuid

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

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



# TOKEN

@api.route('/obtener-token-invitado', methods=['GET'])
def obtener_token_invitado():
    # Crear un nuevo cliente invitado en la base de datos
    nuevo_cliente = Cliente()
    db.session.add(nuevo_cliente)
    db.session.commit()
    
    # Crear el token JWT usando el UUID como identidad
    token_acceso = create_access_token(identity=str(nuevo_cliente.uuid_invitado))

    return jsonify(access_token=token_acceso, uuid_invitado=str(nuevo_cliente.uuid_invitado)), 200


# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200



# CLIENTE

@api.route('/cliente', methods=['POST'])
def agregar_cliente():
    data = request.get_json()
    nuevo_cliente = Cliente(
        id=data['id'],
    )
    db.session.add(nuevo_cliente)
    db.session.commit()
    return jsonify({"mensaje": "Cliente creado exitosamente"})


# CAMARERO

@api.route('/camareros', methods=['GET'])
def get_all_camareros():
    camareros = Camarero.query.all()
    return jsonify([camarero.serialize() for camarero in camareros]), 200


@api.route('/camareros/<int:id>', methods=['GET'])
def get_camarero(id):
    camarero = Camarero.query.get(id)
    if camarero:
        return jsonify(camarero.serialize()), 200
    else:
        return jsonify({"message": "Camarero no encontrado"}), 404


@api.route('/camareros', methods=['POST'])
def crear_camarero():
    data = request.get_json
    nuevo_camarero = Camarero(email=data.get['email'], password=data.get['password'])
    db.session.add(nuevo_camarero)
    db.session.commit()
    return jsonify({"message": "Camarero registrado exitosamente"}), 201
 


# MESA   

@api.route("/mesas", methods=["GET"])
def obtener_mesas():
    mesas = Mesa.query.all()
    mesas_info = [{"id": mesa.id, "name": mesa.name} for mesa in mesas]
    return jsonify(mesas_info), 200


@api.route("/mesas", methods=['POST'])
def crear_mesa():
        data = request.get_json()

        nueva_mesa = Mesa(
            id=data['id'],
            name=data['name'],
        )

        db.session.add(nueva_mesa)
        db.session.commit()

        return jsonify({"message": "Mesa creada exitosamente"})


@api.route("/mesa/<int:id>/status", methods=['GET'])
def obtener_estado_mesa(id):
    mesa = Mesa.query.get(id)
    if mesa:
        return jsonify({"ocupada": mesa.ocupada}), 200
    else:
        return jsonify({"message": "Mesa no encontrada"}), 404

    

# PRODUCTOS

@api.route('/productos', methods=['GET'])
def obtener_productos():
    productos = Producto.query.all()
    return jsonify([producto.serialize() for producto in productos])



@api.route('/productos/<int:producto_id>', methods=['GET'])
def obtener_producto(producto_id):
    producto = Producto.query.get(producto_id)
    if producto:
        return jsonify(producto.serialize())
    else:
        return jsonify({"mensaje": "Producto no encontrado"}), 404    
    


@api.route('/productos', methods=['POST'])
def crear_producto():
    data = request.get_json()
    nuevo_producto = Producto(
        id=data['id'],
        name=data['name'],
        description=data['description'],
        price=data['price']
    )
    db.session.add(nuevo_producto)
    db.session.commit()
    return jsonify({"mensaje": "Producto creado exitosamente"})


@api.route('/productos/<int:producto_id>', methods=['DELETE'])
def eliminar_producto(producto_id):
    producto = Producto.query.get(producto_id)
    if not producto:
        return jsonify({"mensaje": "Producto no encontrado"}), 404

    db.session.delete(producto)
    db.session.commit()
    return jsonify({"mensaje": "Producto eliminado exitosamente"})




# MENU

@api.route('/menu', methods=['GET'])

def obtener_menu():
        menus = Menu.query.all()
        return jsonify([menu.serialize() for menu in menus])


@api.route('/menu', methods=['POST'])
def crear_menu():
        data = request.get_json()
        nuevo_menu = Menu(
            name=data['name'],
            description=data['description']
        )
        db.session.add(nuevo_menu)
        db.session.commit()
        return jsonify({"mensaje": "Menú creado exitosamente"}), 201


@api.route('/menu/<int:menu_id>', methods=['GET'])
def obtener_idMenu(menu_id):
        menu = Menu.query.get(menu_id)
        if menu:
            return jsonify(menu.serialize())
        else:
            return jsonify({"message": "Menú no encontrado"}), 404



# PEDIDOS

@api.route('/pedidos', methods=['GET'])
def get_pedidos():
    # Obtén todos los pedidos de la base de datos
    pedidos = Pedido.query.all()
    return jsonify([pedido.serialize() for pedido in pedidos])

   

@api.route('/pedidos', methods=['POST'])
def crear_pedido():
    data = request.get_json()

    nuevo_pedido = Pedido( 
        id_cliente=data.get('clienteId'),  # Utiliza el ID del cliente invitado asociado al token
        id_mesa=data.get('mesaId'),
        date=data.get('date'), 
        total_amount=data.get('total_amount'),
        status=data.get('status'),    
    )

    db.session.add(nuevo_pedido)
    db.session.commit()

    return jsonify({'mensaje': 'Pedido creado correctamente'}), 201


@api.route('/pedidos/<int:pedidos_id>', methods=['GET'])
def obtener_idPedidos(pedidos_id):
        pedido = Pedido.query.get(pedidos_id)
        if pedido:
            return jsonify(pedido.serialize())
        else:
            return jsonify({"message": "Pedido no encontrado"}), 404


@api.route('/pedido/<int:pedido_id>', methods=['PUT'])
def actualizar_pedido(pedido_id):
    data = request.get_json()
    pedido = Pedido.query.get(pedido_id)

    if not pedido:
        return jsonify({'message': 'Pedido no encontrado'}), 404

    pedido.id_cliente = data['id_cliente']
    pedido.id_mesa = data['id_mesa']
    pedido.date = data['date']
    pedido.total_amount = data['total_amount']
    pedido.status = data['status']

    try:
        db.session.commit()
        return jsonify({'message': 'Pedido actualizado exitosamente'})
    except IntegrityError:
        db.session.rollback()
        return jsonify({'message': 'Error al actualizar el pedido'}), 500


@api.route('/pedido/<int:pedido_id>', methods=['DELETE'])
def eliminar_pedido(pedido_id):
    pedido = Pedido.query.get(pedido_id)
    if not pedido:
        return jsonify({'message': 'Pedido no encontrado'}), 404

    db.session.delete(pedido)
    db.session.commit()
    return jsonify({'message': 'Pedido eliminado exitosamente'})




# PRODUCTO PEDIDO 

@api.route('/productoPedido', methods=['GET'])
def obtener_productoPedido(self):
        productos_pedidos = ProductoPedido.query.all()
        return jsonify([producto_pedido.serialize() for producto_pedido in productos_pedidos])








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