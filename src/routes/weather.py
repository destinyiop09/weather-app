from fastapi import APIRouter


from app.service.weather_service import get_weather
from app.schemas import weather_response, units


router = APIRouter()


@router.get("/weather/{city}", response_model=weather_response)
def weather(city: str, units: str = units.metric):
    return get_weather(city, units)
