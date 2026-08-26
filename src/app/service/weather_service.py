import os

import requests

from fastapi import HTTPException
from dotenv import load_dotenv

load_dotenv()

api = os.getenv("weather_api_key")


def get_weather(city: str, units: str):

    url = "https://api.openweathermap.org/data/2.5/weather"

    details = {
        "q": city,
        "units": units,
        "APPID": api
    }

    try:
        response = requests.get(
            url,
            params=details,
            timeout=10
        )
    except requests.RequestException:
        raise HTTPException(status_code=503,
                            detail="Weather service is unavailable"
                            )

    data = response.json()

    if data["cod"] != 200:
        raise HTTPException(
            status_code=404,
            detail="city not found"
        )

    weather = data["weather"][0]["main"]
    temperature = round(data["main"]["temp"])
    timezone = data["timezone"]
    country = data["sys"]["country"]

    return {
        "city": city,
        "country": country,
        "weather": weather,
        "temperature": temperature,
        "timezone": timezone
    }
