"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Mesa, Pedido
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
    





@api.route('/pedidos', methods=['POST'])
def crear_pedido():
    data = request.get_json()

    nuevo_pedido = Pedido(
        id_cliente=data.get('clienteId'),
        id_mesa=data.get('mesaId'),
        date=data.get('fecha'), 
        total_amount=data.get('precioTotal'),
        status=data.get('estado'),    
    )

    db.session.add(nuevo_pedido)
    db.session.commit()

    return jsonify({'mensaje': 'Pedido creado correctamente'}), 201

@api.route('/pedidos', methods=['GET'])
def obtener_pedidos():
                                                                   
    pedidos = Pedido.query.all()

    if not pedidos:
        return jsonify({'mensaje': 'No hay pedidos disponibles'}), 404
    
    pedidos = list(map(lambda pedido: pedido.serialize(), pedidos))

    return jsonify(pedidos), 200


