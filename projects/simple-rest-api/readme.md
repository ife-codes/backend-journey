# 📝 Simple REST API - Todo App

A clean and secure RESTful API for managing a Todo List, built using **Node.js**, **Express**, **MongoDB**, and **JWT-based authentication**.

---

## 🔐 Authentication

### ✅ Sign Up — `POST /auth//signup`
Creates a new user account.

#### Request Body:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### ✅ Login — `POST auth/login`
Authenticates user and sets a JWT cookie for future requests.

#### Request Body:
``` json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### 📋 Todos Endpoints

⚠️ All /todos routes require the user to be authenticated (JWT cookie must be present).

### 📄 Get All Todos — GET /todos
Returns all todos created by the currently logged-in user.

### ➕ Create Todo — POST /todos
Creates a new todo for the authenticated user.

Request Body
```json
{
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread"
}
```

### ✏️ Update Todo — PUT /todos/update/:id
Updates a specific todo item by ID.

Request Body
```json
{
  "title": "Updated title",
  "description": "Updated description"
}
```

### ❌ Delete Todo — DELETE /todos/delete/:id
Deletes a todo by ID.

### 🧩 Tech Stack
Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

Cookie-based sessions

MVC Architecture

### 📁 Folder Structure
```pgsql
Edit
simple-rest-api/
│
├── controllers/
│   ├── authController.js
│   └── todoController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Todo.js
│
├── routes/
│   ├── authRoutes.js
│   └── todoRoutes.js
│
├── .env
├── server.js
└── README.md
```

### ⚙️ Setup Instructions
1. Clone the Repository
```
git clone https://github.com/ife-codes/backend-journey.git
cd backend-journey/projects/simple-rest-api
```
2. Install Dependencies: 
```
npm install
```
3. Configure Environment Variables:
Create a .env file in the root with the following:

```
MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret_key
```
4. Start the Server:

```
npm start
```

🧪 Todo Schema
``` json
{
  "_id": "ObjectId",
  "title": "Todo title",
  "description": "Todo details",
  "user": "UserId",
  "createdAt": "Timestamp"
}
```

### 🚀 Author
Akinmoyero Ifeoluwa - @ife-codes


Crafting clean backend APIs with passion & precision 🚀
GitHub