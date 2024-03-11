  
import os
from flask_admin import Admin
from .models import db, User, Cliente, Camarero, Menu, Producto, ProductoPedido, Mesa, Pago, Pedido
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Cliente, db.session))
    admin.add_view(ModelView(Camarero, db.session))
    admin.add_view(ModelView(Mesa, db.session))
    admin.add_view(ModelView(Menu, db.session))
    admin.add_view(ModelView(Producto, db.session))
    admin.add_view(ModelView(Pedido, db.session))
    admin.add_view(ModelView(ProductoPedido, db.session))
    admin.add_view(ModelView(Pago, db.session))
    

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))