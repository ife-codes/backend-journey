
# 🔗 DevLink API

A RESTful API for managing developer portfolio links, built with **Node.js**, **Express**, and **MongoDB**. Authenticated users can create, read, update, and delete their own links. JWT-based authentication ensures secure access.

---

## 🔐 Authentication

### ✅ Sign Up — `POST /api/auth/signup`

Creates a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

### ✅ Login — `POST /api/auth/login`

Authenticates user and sets a JWT cookie.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

---

## 🔗 Link Routes

All `/api/links` routes require authentication via JWT cookie.

### 📄 Get All Links — `GET /api/links`

Returns all links for the logged-in user.

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Number of items per page (default: 10)

### ➕ Create Link — `POST /api/links`

Creates a new portfolio link, the notes is optional.

**Request Body:**
```json
{
  "title": "GitHub",
  "url": "https://github.com/username",
  "notes": "This note is for...",
  "category": "e.g. blog, tool e.t.c"
}
```

### ✏️ Update Link — `PATCH /api/links/update/:id`

Updates a specific link by, the notes is optional.

**Request Body:**
```json
{
  "title": "GitHub",
  "url": "https://github.com/username",
  "notes": "This note is for...",
  "category": "e.g. blog, tool e.t.c"
}
```

### ❌ Delete Link — `DELETE /api/links/delete/:id`

Deletes a link by ID.

---

## 🧩 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Cookie-based sessions
- MVC Folder Structure
- Pagination
- Rate Limiting

---

## 📁 Folder Structure

```
devlink-api/
├── controllers/
│   ├── authController.js
│   └── linkController.js
│
├── middlewares/
│   ├── authMiddleware.js
│
├── models/
│   ├── authModel.js
│   └── linkModel.js
│
├── routes/
│   ├── authRoutes.js
│   └── linkRoutes.js
|
├── .env
├── limitconfig.js
├── app.js
└── README.md
```

---

## ⚙️ Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/ife-codes/backend-journey.git
cd backend-journey/projects/devlink-api
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create `.env` file in the root:**

```
MONGOOSE_CONNECTION_STRING=your_mongo_connection_string
JWT_SOUP=your_jwt_secret
```

4. **Start the server:**

```bash
npm run dev
```

---

## 🧪 Link Schema

```json
{
  "_id": "ObjectId",
  "title": "Platform Name",
  "url": "https://platform.com/user",
  "notes": "This link is for...",
  "category": "e.g. blog, tool e.t.c.",
  "user": "UserId",
  "createdAt": "Timestamp",
  "updatedAt": "Timestamp",
}
```

---

## 🚀 Author

**Akinmoyero Ifeoluwa** - [@ife-codes](https://github.com/ife-codes)

Clean backend APIs with passion & precision 🚀

---

## 📌 Coming Soon

- Swagger Docs
- Tag Filtering
- Click Tracking
