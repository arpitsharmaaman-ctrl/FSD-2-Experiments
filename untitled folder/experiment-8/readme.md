# Experiment 8 – Develop RESTful APIs using Backend Framework

## Objective

To develop RESTful APIs using a backend framework (Flask) for performing CRUD operations on student data.

## Tools & Technologies

* Python 3
* Flask
* Postman (for API testing)
* Virtual Environment (venv)

## Project Structure

```
experiment-8
│
├── app.py
├── run.py
├── requirements.txt
│
├── routes
│   └── student_routes.py
│
├── middleware
│   └── logger.py
│
└── vir-env
```

## Description

This project implements a simple RESTful API using the Flask framework.
The API allows users to perform CRUD operations (Create, Read, Update, Delete) on student records.

The application uses **Flask Blueprints** to organize routes and **middleware logging** to log incoming requests.

Student data is stored temporarily using in-memory storage.

## API Endpoints

### 1. Create Student

**POST** `/students`

Request Body:

```
{
  "name": "John",
  "age": 20
}
```

Response: Creates a new student.

---

### 2. Get All Students

**GET** `/students`

Response: Returns a list of all students.

---

### 3. Get Single Student

**GET** `/students/<student_id>`

Response: Returns a specific student by ID.

---

### 4. Update Student

**PUT** `/students/<student_id>`

Request Body:

```
{
  "name": "Updated Name",
  "age": 21
}
```

Response: Updates the student details.

---

### 5. Delete Student

**DELETE** `/students/<student_id>`

Response: Deletes the student from the database.

## Steps to Run the Project

### 1. Create Virtual Environment

```
python3 -m venv vir-env
```

### 2. Activate Environment

```
source vir-env/bin/activate
```

### 3. Install Dependencies

```
pip install -r requirements.txt
```

### 4. Run the Server

```
python run.py
```

The server will start at:

```
http://127.0.0.1:5000
```

## Testing APIs

APIs can be tested using **Postman** by sending GET, POST, PUT, and DELETE requests to the above endpoints.

## Conclusion

In this experiment, we successfully developed RESTful APIs using the Flask backend framework and implemented CRUD operations for managing student data.

## Author

Arpit Sharma, UID:- 23BDA70046
