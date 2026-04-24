from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# ✅ Using SQLite (no password, no server required)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ✅ Model
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

# ✅ Create DB
with app.app_context():
    db.create_all()

# ✅ Home route
@app.route("/")
def home():
    return {"message": "Backend running with SQLite 🚀"}

# ✅ CREATE
@app.route("/students", methods=["POST"])
def create_student():
    data = request.get_json()
    student = Student(name=data["name"])
    db.session.add(student)
    db.session.commit()
    return jsonify({"id": student.id, "name": student.name}), 201

# ✅ READ ALL
@app.route("/students", methods=["GET"])
def get_students():
    students = Student.query.all()
    return jsonify([{"id": s.id, "name": s.name} for s in students]), 200

# ✅ READ ONE
@app.route("/students/<int:id>", methods=["GET"])
def get_student(id):
    student = Student.query.get_or_404(id)
    return jsonify({"id": student.id, "name": student.name}), 200

# ✅ UPDATE
@app.route("/students/<int:id>", methods=["PUT"])
def update_student(id):
    student = Student.query.get_or_404(id)
    data = request.get_json()
    student.name = data["name"]
    db.session.commit()
    return jsonify({"id": student.id, "name": student.name}), 200

# ✅ DELETE
@app.route("/students/<int:id>", methods=["DELETE"])
def delete_student(id):
    student = Student.query.get_or_404(id)
    db.session.delete(student)
    db.session.commit()
    return jsonify({"message": "Deleted"}), 200

# ✅ Run server
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)