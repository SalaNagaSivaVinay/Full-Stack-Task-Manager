# 🚀 Full Stack Task Manager (Backend + Frontend)

## 📌 Project Overview

This project is a **Scalable Full Stack Task Manager Application** built as part of a Backend Developer Intern assignment.
It demonstrates secure authentication, role-based access, and CRUD operations with a clean frontend UI.

---

## 🏗️ Tech Stack

### 🔵 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Bcrypt (Password Hashing)

### 🟢 Frontend

* React.js (Vite)
* Axios
* Basic CSS Styling

---

## ✨ Features

### ✅ Authentication

* User Registration
* User Login
* Password Hashing using Bcrypt
* JWT Token-based Authentication

### ✅ Role-Based Access

* Default role: User
* (Extendable for Admin functionality)

### ✅ Task Management (CRUD)

* Create Task
* View Tasks
* Delete Task
* Protected routes (JWT required)

### ✅ Frontend UI

* Register & Login Interface
* Protected Dashboard
* Task Management UI
* Success/Error Messages

### ✅ API Features

* RESTful API design
* API versioning (`/api/v1`)
* Proper status codes
* Error handling

---

## 📂 Project Structure

```
backend/
│── models/
│── routes/
│── controllers/
│── middleware/
│── config/
│── server.js

frontend/
│── src/
│── public/
│── App.jsx
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 🔹 2. Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

---

### 🔹 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🌐 Deployment

### 🔵 Backend Deployment

* Hosted on Render

### 🟢 Frontend Deployment

* Hosted on Vercel

---

## 🔗 Live Links

* Frontend: https://your-app.vercel.app
* Backend API: https://your-backend.onrender.com

---

## 🔐 Security Practices

* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes
* Input validation (basic)
* Secure token handling

---

## 📈 Scalability Considerations

* Modular folder structure
* API versioning (`/api/v1`)
* Easily extendable to microservices
* Can integrate caching (Redis)
* Ready for load balancing

---

## 📄 API Endpoints

### 🔐 Auth Routes

* POST `/api/v1/auth/register`
* POST `/api/v1/auth/login`

### 📌 Task Routes

* GET `/api/v1/tasks`
* POST `/api/v1/tasks`
* DELETE `/api/v1/tasks/:id`

---

## 🧪 Testing

* Tested using Postman
* Frontend integrated with backend APIs
* Verified authentication & CRUD functionality

---

## 🚀 Future Improvements

* Admin role & RBAC
* Swagger API documentation
* Update task feature
* Pagination
* Better UI (Tailwind/Material UI)
* Docker deployment

---

## 👨‍💻 Author

**Sala Naga Siva Vinay**

---

## ⭐ Conclusion

This project demonstrates the ability to build a **secure, scalable backend system with a functional frontend**, following industry best practices.

---
