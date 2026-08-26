from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.weather import router as weather_router


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Weather application is running"
    }


app.include_router(weather_router)
