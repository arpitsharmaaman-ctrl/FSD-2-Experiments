# 📘 Experiment-16



---

##  Title  
**Perform Unit Testing for Frontend and Backend Modules**

---

##  Aim  
To perform unit testing on backend APIs using **pytest** and on frontend form components using **Vitest**, and automate testing using **GitHub Actions**.

---

## 📖 Theory  

Unit Testing is a software testing technique where individual components or modules are tested independently.

### 🔹 Backend Testing (pytest)
- Pytest is a Python testing framework.
- Used to test Flask APIs.
- Flask test client simulates HTTP requests.
- Validates:
  - Status codes
  - API responses
  - Error handling

### 🔹 Frontend Testing (Vitest)
- Vitest is used for testing React (Vite) apps.
- Works with React Testing Library.
- Tests:
  - Form rendering
  - User input
  - Validation logic
  - Submit functionality

### 🔹 Code Coverage
- Coverage shows how much code is tested.
- Tools used:
  - Backend → `pytest-cov`
  - Frontend → `Vitest coverage`

### 🔹 Continuous Integration (CI)
- GitHub Actions automates testing.
- Runs tests on every push.
- Ensures code quality.

---

## ⚙️ Technologies Used  

- Python (Flask)
- Pytest
- Pytest-Cov
- React (Vite)
- Vitest
- React Testing Library
- GitHub Actions
- Node.js
- Material UI

---

##  Functional Requirements  

### Backend
- Create API
- Read API
- Update API
- Delete API

### Frontend
- Form rendering
- Input validation
- Submit handling

---

##  Testing Implementation  

### Backend Testing
- Tested APIs using pytest
- Verified:
  - Status codes (200, 201, 404)
  - JSON response
  - Error handling

### Frontend Testing
- Tested form using Vitest
- Covered:
  - Empty input
  - Invalid email
  - Password validation
  - Checkbox validation
  - Successful submission

---

##  Coverage  

### Backend Coverage
```bash
pytest --cov=app --cov-report=html

```

##  📁 Project Structure

Testing/
│
├── experiment-6/ # Frontend (React + Vitest)
│ ├── coverage/ # Coverage report (Vitest)
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── Form.jsx
│ │ │ └── Form.test.jsx
│ │ ├── App.css
│ │ ├── App.jsx
│ │ ├── index.css
│ │ ├── main.jsx
│ │ └── setupTests.js
│ ├── index.html
│ ├── package.json
│ ├── package-lock.json
│ ├── vite.config.js
│ └── README.md
│
├── Experiment-8/ # Backend (Flask + Pytest)
│ ├── htmlcov/ # Coverage report (pytest-cov)
│ ├── routes/
│ ├── app.py
│ ├── run.py
│ ├── test_app.py
│ ├── requirements.txt
│ └── README.md
│
├── screenshots/ # Screenshots for submission
│ ├── workflow-success.png
│ ├── backend-tests.png
│ ├── frontend-tests.png
│ └── coverage-report.png
│
└── README.md # Main README (Experiment-16)
```

## 🔗 GitHub Repository  

Project Code Available At:  
https://github.com/arpitsharmaaman-ctrl/FSD-2-Experiments 

## Screenshots  

###  Workflow Execution
![GitHub Actions Workflow](./screenshots/workflow.png)

![GitHub Actions](./screenshots/actions.png)


### Backend Tests (pytest)
![Backend Tests](./screenshots/backend-tests.png)

### Frontend Tests (Vitest)
![Frontend Tests](./screenshots/frontend-tests.png)

### Coverage Reports
![Backend Coverage Report](./screenshots/Bcover.png)

![Frontend Coverage Report](./screenshots/Fcover.png)



---

## Learning Outcomes  

- Understood the concept of **Unit Testing** for both backend and frontend  
- Learned how to test **Flask APIs using pytest**  
- Learned how to test **React forms using Vitest and Testing Library**  
- Gained knowledge of **code coverage tools** (`pytest-cov`, `Vitest coverage`)  
- Learned to automate testing using **GitHub Actions (CI/CD)**  
- Improved debugging, validation, and testing skills  
- Understood importance of testing in real-world software development  

---

##  Conclusion  

In this experiment, unit testing was successfully implemented for both backend and frontend modules.  
Backend APIs were tested using **pytest**, while frontend form validation was tested using **Vitest**.  
Code coverage tools helped identify untested areas and improve test completeness.  
GitHub Actions enabled automated testing, ensuring continuous integration and reliability of the application.  

---

## 👤 Author  

**Bedant Singhania**  
B.E. CSE (Big Data Analytics)  
Chandigarh University  