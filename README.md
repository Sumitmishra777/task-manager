# Task Management System

A full-stack task management application built with React, Node.js, Express, and MongoDB.

---

# Features

- User Authentication (JWT)
- Role-Based Access Control
- Task CRUD Operations
- Team Management
- Protected Routes
- Responsive Dashboard UI

---

# Tech Stack

## Frontend
- React
- React Router DOM
- Tailwind CSS
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

# Folder Structure

```bash
task-manager/
│
├── frontend/
├── backend/
└── README.md
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Environment Variables

## Frontend `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

## Backend `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# API Overview

## Auth Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

---

## Task Routes

| Method | Endpoint |
|---|---|
| GET | /api/tasks |
| POST | /api/tasks |
| PUT | /api/tasks/:id |
| DELETE | /api/tasks/:id |

---

## Team Routes

| Method | Endpoint |
|---|---|
| GET | /api/teams |
| POST | /api/teams |
| PUT | /api/teams/:id |
| DELETE | /api/teams/:id |

---

# Roles

- SUPER_ADMIN
- TEAM_ADMIN
- TEAM_MEMBER

---

# Author

Sumit Kumar Mishra
