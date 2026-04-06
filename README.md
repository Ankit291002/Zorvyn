# 💰 Finance Data Processing & Access Control Backend

## 📌 Project Overview

This project is a backend system for a finance dashboard that manages financial records and enforces role-based access control (RBAC).
It allows users to create, view, and analyze financial data based on their assigned roles.

---

## 🚀 Features

* 🔐 Authentication using JWT
* 👥 Role-Based Access Control (Admin, Analyst, Viewer)
* 💰 Financial Records Management (CRUD operations)
* 📊 Dashboard Summary APIs
* ⚠️ Input validation and error handling
* 🔍 Filtering records by type and category

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (Authentication)

---

## 👤 Roles & Permissions

| Role    | Permissions                                        |
| ------- | -------------------------------------------------- |
| Viewer  | View dashboard only                                |
| Analyst | View records and analytics                         |
| Admin   | Full access (create, update, delete, manage users) |

---

## 📡 API Endpoints

### 🔐 Auth

* POST `/auth/register` → Register user
* POST `/auth/login` → Login and get token

---

### 💰 Records

* GET `/records` → Get records (Admin, Analyst)
* POST `/records` → Create record (Admin)
* PUT `/records/:id` → Update record (Admin)
* DELETE `/records/:id` → Delete record (Admin)

---

### 📊 Dashboard

* GET `/dashboard/summary` → Financial summary

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone <your-repo-link>
cd finance-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Server

```bash
npm start
```

Server will run on:

```text
http://localhost:5000
```

---

## 🧠 Assumptions

* Only admin can modify financial records
* Analysts can only view and analyze data
* Viewer has limited access to dashboard only
* Authentication is handled using JWT

---

## ⚠️ Error Handling

* Proper HTTP status codes are used
* Input validation is applied
* Invalid operations are handled gracefully

---

## ✨ Future Improvements

* Pagination for records
* Category-wise analytics
* Monthly trends
* API documentation (Swagger)
* Deployment

---

## 📌 Notes

* `.env` file is not included for security reasons
* Use `.env.example` as reference


