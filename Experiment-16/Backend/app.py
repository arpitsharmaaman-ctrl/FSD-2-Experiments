from flask import Flask
from routes.student_routes import student_bp
# from middleware.logger import register_middlewares

def create_app():
    app = Flask(__name__)      #returning an instance of flask
    
    # Register Blueprints
    app.register_blueprint(student_bp)

    # Register Middlewares
    # register_middlewares(app)

    return app

app = create_app()

#GET API url
@app.route("/")
def home():
    return {"message": "Backend Server is running"}   #returning json