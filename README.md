# 🎨 Shortly Frontend – React URL Management Dashboard

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple)
![Axios](https://img.shields.io/badge/Axios-HTTP-green)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

Shortly Frontend is a responsive React application that provides a clean and user-friendly interface for interacting with the Shortly backend. Users can securely authenticate, manage shortened URLs, and view analytics through an intuitive dashboard.

The frontend communicates with the Spring Boot backend using REST APIs and Axios.
---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT-based Authentication
- Protected Routes

---

## 📋 Dashboard

- View all shortened URLs
- Search URLs
- Copy shortened URLs
- Delete URLs
- View URL statistics

---

## 🔗 URL Management

- Create Short URLs
- Search Existing URLs
- Delete URLs
- Redirect to Original URLs

---

## 🎨 User Interface

- Responsive Layout
- Navigation Bar
- Toast Notifications
- Clean and Simple User Experience
- ---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- JavaScript (ES6+)
- CSS3
- Vite

---

## Backend Integration

- Spring Boot REST APIs
- JWT Authentication
- JSON
- HTTP/HTTPS

---

## Development Tools

- Visual Studio Code
- Git
- GitHub
- npm
- ---

# 📂 Project Structure

```
src
├── assets
├── components
├── pages
├── services
├── styles
├── App.jsx
├── main.jsx
```

## Folder Responsibilities

| Folder | Purpose |
|----------|---------|
| `assets` | Stores static files such as images and icons. |
| `components` | Contains reusable UI components. |
| `pages` | Contains application pages such as Login, Register, and Dashboard. |
| `services` | Handles communication with the Spring Boot backend using Axios. |
| `styles` | Contains CSS files for styling the application. |
| `App.jsx` | Defines routing and application layout. |
| `main.jsx` | Entry point of the React application. |
---

# 🔗 Backend API Integration

The frontend communicates with the Spring Boot backend through REST APIs using Axios.

## Authentication Flow

1. The user logs in using their email and password.
2. The backend validates the credentials and returns a JWT token.
3. The JWT token is stored in the browser's `localStorage`.
4. Every protected request includes the JWT token in the `Authorization` header.
5. The backend validates the token before processing the request.

---

## Frontend Responsibilities

- Authenticate users
- Store JWT token in localStorage
- Send authenticated API requests
- Display backend responses
- Handle API errors gracefully
- Redirect users after successful authentication
- Protect private routes from unauthorized access
