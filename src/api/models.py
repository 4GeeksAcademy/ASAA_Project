from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, ForeignKey, Enum, Boolean
from sqlalchemy.orm import relationship

db = SQLAlchemy() 

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'
 
    def serialize(self):
        return {
            "id": self.id, 
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    

class Cliente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pedidos = relationship('Pedido', backref='cliente', lazy=True)
    
    

    def __repr__(self):
        return f'Cliente: {self.id}'

    def serialize(self):
        return {
            "id": self.id,  
        }   
        

class Camarero(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    mesas = relationship('Mesa', backref='camarero', lazy=True)
    

    def __repr__(self):
        return f'Camarero: {self.email}'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    

class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<Admin {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    

class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_admin = db.Column(db.Integer, ForeignKey('admin.id'))
    name = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    productos = relationship('Producto', backref='menu', lazy=True)
    

    def __repr__(self):
        return f'{self.name}'

    def serialize(self):
        return {
            "id": self.id,
            "id_admin": self.id_admin,
            "name" : self.name,
            "description" : self.description
        }

class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_menu = db.Column(db.Integer, ForeignKey('menu.id'))
    name = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    price =db.Column(db.String(80), unique=False, nullable=False)
    producto_pedidos = relationship('ProductoPedido', backref='producto', lazy=True)
    

    def __repr__(self): 
        return f'{self.name}'

    def serialize(self):
        return {
            "id": self.id,
            "id_menu": self.id_menu,
            "name" : self.name,
            "description" : self.description,
            "price" : self.price,
        }

class Pago(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_cliente = db.Column(db.Integer, ForeignKey('cliente.id'))
    id_pedido = db.Column(db.Integer, ForeignKey('pedido.id'))
    date = db.Column(db.String(80), unique=False, nullable=False)
    metodo = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return f'PagoId: {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_cliente": self.id_cliente,
            "id_pedido": self.id_pedido,
            "date" : self.date,
            "metodo" : self.metodo,
        }
    

class Mesa(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id_admin = db.Column(db.Integer, ForeignKey('admin.id'))
    id_camarero = db.Column(db.Integer, ForeignKey('camarero.id'))
    name = db.Column(db.String(80), unique=False, nullable=False)
    pedidos = relationship('Pedido', backref='mesa', lazy=True)
    

    def __repr__(self):
        return f'Mesa: {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_admin": self.id_admin,
            "id_camarero": self.id_camarero,
        }
       

class ProductoPedido(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_producto = db.Column(db.Integer, ForeignKey('producto.id'))
    id_pedido = db.Column(db.Integer, ForeignKey('pedido.id'))
    status = db.Column(db.Enum('Preparando', 'Listo', 'Servido', name='status_enum'), unique=False, nullable=False)
    

    def __repr__(self):
        return f'ProductoPedido: {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_producto": self.id_producto,
            "id_pedido": self.id_pedido,
            "status" : self.status,  
        }
    

class Pedido(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_cliente = db.Column(db.Integer, ForeignKey('cliente.id'), nullable=True)
    id_mesa = db.Column(db.Integer, ForeignKey('mesa.id'))
    date = db.Column(db.String(80), unique=False, nullable=False)
    total_amount = db.Column(db.Integer, unique=False, nullable=False)
    status = db.Column(db.Boolean, unique=False, nullable=False)
    producto_pedidos = relationship('ProductoPedido', backref='pedido', lazy=True)
    
    

    def __repr__(self):
        return f'PedidoId: {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_cliente": self.id_cliente,
            "id_mesa": self.id_mesa,
            "date" : self.date,
            "total_amount" : self.total_amount,
            "status" : self.status,  
        }


