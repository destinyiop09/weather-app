# 🌤️ Weather App

A simple full-stack weather application built with **Python, FastAPI, React, TypeScript, and the OpenWeather API**.

The application allows users to search for a city and view its current weather information, including temperature, weather condition, country, and timezone.

This project was built as part of my journey learning **Python, FastAPI, REST APIs, and backend development**.

## 🚀 Features

- Search weather by city
- Display current temperature
- Display weather condition
- Display country
- Display timezone
- Weather icons
- Invalid city handling
- Loading and error messages
- Responsive frontend
- FastAPI backend
- React and TypeScript frontend
- OpenWeather API integration
- Environment variables for API keys

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
- React
- TypeScript
- Vite
- HTML
- CSS
- JavaScript

### API
- OpenWeather API

### Tools
- Git
- GitHub
- VS Code
- WSL

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