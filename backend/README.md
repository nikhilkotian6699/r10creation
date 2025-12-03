# Backend – R10 Creations Website

Node.js + Express Backend API

This backend powers the R10 Creations website, handling product data, gallery items, services, contact form submissions, and any future dynamic features.
It follows an MVC architecture and is designed to be scalable, modular, and production-ready.

---

## 🚀 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB / Mongoose** (if using MongoDB)
* **dotenv**
* **CORS**
* Additional utilities (logger, validators, helpers)

---

## 📂 Project Structure

```
backend/
│
├── src/
│   ├── config/         # Database config, environment setup
│   ├── controllers/    # API controller logic
│   ├── models/         # Database models (Mongoose schemas)
│   ├── routes/         # Route definitions
│   ├── utils/          # Helper functions (optional)
│   ├── app.js          # Express app setup
│   └── server.js       # Server entry file
│
├── logs/               # (optional) log files for errors / access
│
├── .env                # Environment variables
├── package.json
└── README.md
```

---

## 🔧 Installation & Setup

### 1. Install Dependencies

```
npm install
```

### 2. Create `.env` File

Add the required environment variables:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
CORS_ORIGIN=http://localhost:3000
JWT_SECRET=your_secret_key   # only if auth needed
```

### 3. Start Development Server

```
npm run dev
```

### 4. Start Production Server

```
npm start
```

Backend runs at:
**[http://localhost:5000](http://localhost:5000)**

---

## 🛣️ API Routes (Example Layout)

```
/api/products
/api/services
/api/gallery
/api/contact
```

Each route connects to:

* Controller → business logic
* Model → DB schema
* Service/util → helper functions
* Route → exposed endpoints

---

## 📦 Scripts

```
npm run dev     # Run with nodemon
npm start       # Production mode
```

---

## 📘 Notes

* Avoid committing the `logs/` folder or `node_modules/`.
* Keep `.env` private.
* Use `utils/` for reusable helpers.
* Add validation + error handling in controllers.

---

## 📞 Support

For any issues or improvements, contact the development team.
