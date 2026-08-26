from pydantic import BaseModel
from enum import Enum


class weather_response(BaseModel):
    city: str
    country: str
    weather: str
    temperature: int
    timezone: int


class units(str, Enum):
    metric = "metric"
    imperial = "imperial"
