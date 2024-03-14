"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager
<<<<<<< HEAD
import stripe
from flask_cors import CORS

# Configurar la clave secreta de Stripe
stripe.api_key = 'sk_test_51OtEL7CFFXL2ttgGOoXuuOf9zPUpRVLtI025Ji2mUhEhf41NgRqadXt64huFJAFk4dregOjhpcq7kY59AiaoQFge00a8mhigCP'
=======
from flask_mail import Mail, Message
from flask_cors import CORS
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a

# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

app = Flask(__name__)
CORS(app)

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "angel" 
jwt = JWTManager(app)

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": 'teest4geeks12@gmail.com',
    "MAIL_PASSWORD": 'ahyz rgmy igtb yclg'
}

# Actualización de la configuración del correo
app.config.update(mail_settings)

# Inicialización del objeto Mail
mail = Mail(app)



# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this "super secret" to something else!
jwt = JWTManager(app)
CORS(app)
# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response

# Ruta para crear una sesión de pago en Stripe
@app.route('/create-checkout-session', methods=[ 'POST'])
def create_checkout_session():
    pedido = request.json["pedido"]
    print(pedido)
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items= pedido,
        mode='payment',
        success_url=os.getenv('BACKEND_URL'),
        cancel_url=os.getenv('BACKEND_URL'),
    )

    return jsonify({'sessionId': session.id})

@app.route('/send-email', methods=['POST'])
def send_email():
    email = request.json.get("email", None)

    if email:
            # Configurar el mensaje de correo electrónico
            message = Message(
                subject="Reset your password",
                sender=app.config.get("MAIL_USERNAME"),
                recipients=[email],
                html='Prueba'
            )

    # Enviar el correo electrónico
    mail.send(message)



# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
