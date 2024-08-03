from flask import Flask, send_from_directory
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    from .routes import main
    app.register_blueprint(main)

    @app.route('/')
    def index():
        return send_from_directory('.', 'index.html')
    
    return app