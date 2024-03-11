"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cliente, Mesa, Producto, Pedido
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


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
 


# MESA

@api.route("/mesa", methods=["GET"])
def get_users():
    mesas = Mesa.query.all()
    mesas = list(map (lambda mesa: mesa.serialize(), mesas))
    
    return jsonify(mesas), 200  


@api.route("/mesa", methods=['POST'])
def crear_mesa():
        data = request.json

        nueva_mesa = Mesa(
            id=data['id'],
            name=data['name']
        )

        db.session.add(nueva_mesa)
        db.session.commit()

        return jsonify({"message": "Mesa creada exitosamente"})
    



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



# PEDIDOS

@api.route('/pedidos', methods=['GET'])
def obtener_pedidos():
                                                                   
    pedidos = Pedido.query.all()

    if not pedidos:
        return jsonify({'mensaje': 'No hay pedidos disponibles'}), 404
    
    pedidos = list(map(lambda pedido: pedido.serialize(), pedidos))

    return jsonify(pedidos), 200


@api.route('/pedidos', methods=['POST'])
def crear_pedido():
    data = request.get_json()

    nuevo_pedido = Pedido( 
        id_cliente=data.get('clienteId'),
        id_mesa=data.get('mesaId'),
        date=data.get('date'), 
        total_amount=data.get('total_amount'),
        status=data.get('status'),    
    )

    db.session.add(nuevo_pedido)
    db.session.commit()

    return jsonify({'mensaje': 'Pedido creado correctamente'}), 201


@api.route('/pedido/<int:pedido_id>', methods=['PUT'])
def actualizar_pedido(pedido_id):
    data = request.json
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





