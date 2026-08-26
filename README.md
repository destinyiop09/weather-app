# 🌤️ Weather App

A simple full-stack weather application built with **Python, FastAPI, HTML, CSS, JavaScript, and the OpenWeather API**.

The application allows users to search for a city and view its current weather information, including temperature, weather condition, country, and timezone.

This project was built as part of my journey learning **Python, FastAPI, REST APIs, backend development, frontend development, and deployment**.

## 🌐 Live Project

🚀 **Live Website:**  
https://weather-app-ruddy-three-77.vercel.app/

🔗 **Backend API:**  
https://weather-app-iy3u.onrender.com/

📚 **API Documentation:**  
https://weather-app-iy3u.onrender.com/docs

---

## 🚀 Features

- 🔍 Search weather by city
- 🌡️ Display current temperature
- 🌤️ Display weather condition
- 🌍 Display country
- 🕐 Display timezone
- 🌦️ Weather icons
- ❌ Invalid city handling
- ⏳ Loading messages
- ⚠️ Error handling
- 📱 Responsive frontend
- 🔌 FastAPI REST API
- 🌐 OpenWeather API integration
- 🔐 Environment variables for API keys
- ☁️ Deployed frontend and backend

---

## 🛠️ Tech Stack

### Backend

- Python
- FastAPI
- Uvicorn
- Requests
- Pydantic
- python-dotenv
- uv

### Frontend

- HTML
- CSS
- JavaScript

### External API

- OpenWeather API

### Deployment

- Vercel - Frontend
- Render - Backend

### Development Tools

- Git
- GitHub
- VS Code
- WSL

---

## 📁 Project Structure

```text
weather-app/
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── index.html
│   └── js/
│       └── app.js
│
├── index.html
├── metadata.json
├── package.json
├── pyproject.toml
│
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   │
│   ├── app/
│   │   ├── database.py
│   │   ├── main.py
│   │   ├── schemas.py
│   │   └── service/
│   │       └── weather_service.py
│   │
│   ├── routes/
│   │   ├── __init__.py
│   │   └── weather.py
│   │
│   └── weather_app/
│       └── __init__.py
│
├── tsconfig.json
├── uv.lock
└── vite.config.ts
