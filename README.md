# 🚀 DevConnect – Developer Blog Platform

DevConnect ek modern developer blogging platform hai jahan developers apne ideas, tutorials aur experiences share kar sakte hain. Yeh project full-stack development ko showcase karta hai.

---

## 📌 Features

* 📝 Create, Edit & Delete Blog Posts
* 🔐 User Authentication (Login/Signup with JWT)
* 👤 User Profiles
* 💬 Comments System
* ❤️ Like & Save Posts
* 🔍 Search & Filter Blogs
* 📱 Responsive Design

---

## 🛠️ Tech Stack

### Frontend

* HTML, CSS, JavaScript
* EJS / React (agar use kar rahe ho to update karo)

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JWT (JSON Web Token)
* Bcrypt (Password Hashing)

---

## 📂 Project Structure

```
DevConnect/
│── models/        # Database schemas
│── routes/        # API routes
│── controllers/   # Business logic
│── middleware/    # Auth & error handling
│── views/         # EJS templates (if used)
│── public/        # Static files (CSS, JS, images)
│── config/        # DB & environment configs
│── app.js         # Main server file
│── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/devconnect.git
cd devconnect
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables (.env)

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Project

```bash
npm start
```

---

## 🔐 API Endpoints (Example)

### Auth Routes

* POST `/api/auth/register`
* POST `/api/auth/login`

### Blog Routes

* GET `/api/posts`
* POST `/api/posts`
* PUT `/api/posts/:id`
* DELETE `/api/posts/:id`

---

## 📸 Screenshots

(Add screenshots here)

---

## 📈 Future Improvements

* 🌐 Social login (Google/GitHub)
* 🏷️ Tags & Categories
* 🔔 Notifications
* 📊 Analytics Dashboard

---

## 🤝 Contributing

Contributions welcome hai 🙌
Steps:

1. Fork the repo
2. Create your branch (`git checkout -b feature-name`)
3. Commit changes
4. Push & create PR

---

## 📜 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Saloni Paswan**
💡 Passionate Developer

---
