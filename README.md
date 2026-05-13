# E-Commerce Application

A simple full-stack e-commerce web application developed using MongoDB, Express.js, Node.js, HTML, CSS, and JavaScript.

The application allows users to browse products and simulate basic purchase functionality using a shopping cart system.

---

# Features

- Add products
- View all products
- Delete products
- Simulate product purchase
- Shopping cart functionality
- Backend API integration
- MongoDB database connectivity

---

# Technologies Used

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

---

# Project Structure

ecommerce-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   │
│   ├── models/
│   │     └── Product.js
│   │
│   └── routes/
│         └── productRoutes.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

---

# Installation Steps

## 1. Open Backend Folder

cd backend

---

## 2. Install Dependencies

npm install

---

## 3. Start Backend Server

npm start

Server runs on:

http://localhost:5000

---

# MongoDB Setup

Install MongoDB locally OR use MongoDB Atlas.

Connection string used in:

backend/server.js

Example:

mongoose.connect("mongodb+srv://complete-backend:t1clO0Cf45PqS3Y1@cluster0.q5hy2cq.mongodb.net/ecommerceDB?retryWrites=true&w=majority")

---

# Frontend Setup

Open:

frontend/index.html

in browser.

---

# API Endpoints

## Add Product

POST /api/products

---

## Get All Products

GET /api/products

---

## Delete Product

DELETE /api/products/:id

---

# Functionalities

- Product Management
- Product Listing
- Shopping Cart
- Purchase Simulation
- Backend API Communication
- Database Storage

---

# Sample Product Data

Product Name: Laptop  
Price: 50000  
Description: Gaming Laptop

---

# Output

Users can:
- Add products
- Browse products
- Delete products
- Simulate purchase by adding products to cart

through a web interface.

---

# Future Improvements

- User Authentication
- Payment Gateway Integration
- Product Images
- Order History
- Search and Filter
- Responsive UI

---

