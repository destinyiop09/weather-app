/**
 * ==================================================
 * WEATHER APPLICATION JAVASCRIPT
 * Connects to the FastAPI weather backend
 * ==================================================
 */

// FastAPI backend URL
const API_BASE_URL = 'https://weather-app-iy3u.onrender.com';


// ==================================================
// DOM ELEMENTS
// ==================================================

const weatherForm =
  document.getElementById("weather-form");

const cityInput =
  document.getElementById("city-input");

const searchBtn =
  document.getElementById("search-btn");

const statusMessage =
  document.getElementById("status-message");

const weatherCard =
  document.getElementById("weather-card");


// Weather card elements

const weatherIconEl =
  document.getElementById("weather-icon");

const cardCityCountryEl =
  document.getElementById("card-city-country");

const cardTemperatureEl =
  document.getElementById("card-temperature");

const cardConditionEl =
  document.getElementById("card-condition");

const cardCountryEl =
  document.getElementById("card-country");

const cardTimezoneEl =
  document.getElementById("card-timezone");


// ==================================================
// WEATHER ICON
// ==================================================

function getWeatherIcon(condition) {

  if (!condition) {
    return "🌤️";
  }

  const normalized =
    condition.toLowerCase();


  if (
    normalized.includes("clear") ||
    normalized.includes("sun")
  ) {
    return "☀️";
  }


  if (normalized.includes("cloud")) {
    return "☁️";
  }


  if (normalized.includes("rain")) {
    return "🌧️";
  }


  if (normalized.includes("drizzle")) {
    return "🌦️";
  }


  if (
    normalized.includes("thunder") ||
    normalized.includes("storm")
  ) {
    return "⛈️";
  }


  if (
    normalized.includes("snow") ||
    normalized.includes("sleet")
  ) {
    return "❄️";
  }


  if (
    normalized.includes("mist") ||
    normalized.includes("fog") ||
    normalized.includes("haze") ||
    normalized.includes("smoke") ||
    normalized.includes("dust")
  ) {
    return "🌫️";
  }


  return "🌤️";
}


// ==================================================
// FORMAT TIMEZONE
// ==================================================

function formatTimezone(timezone) {

  if (
    timezone === undefined ||
    timezone === null
  ) {
    return "UTC +0";
  }


  if (typeof timezone === "number") {

    // OpenWeather returns timezone
    // as seconds from UTC.

    const hours =
      timezone / 3600;

    const sign =
      hours >= 0 ? "+" : "-";

    const formattedHours =
      Math.abs(hours);

    return `UTC ${sign}${formattedHours}`;
  }


  return `UTC ${timezone}`;
}


// ==================================================
// SHOW STATUS MESSAGE
// ==================================================

function showStatus(
  message,
  isError = false
) {

  statusMessage.textContent =
    message;

  statusMessage.className =
    `status-message ${isError
      ? "error"
      : "loading"
    }`;

  statusMessage.classList.remove(
    "hidden"
  );
}


// ==================================================
// HIDE STATUS MESSAGE
// ==================================================

function hideStatus() {

  statusMessage.textContent = "";

  statusMessage.classList.add(
    "hidden"
  );
}


// ==================================================
// DISPLAY WEATHER DATA
// ==================================================

function displayWeatherData(
  data,
  units
) {

  hideStatus();


  // Fahrenheit or Celsius
  const unitSymbol =
    units === "imperial"
      ? "°F"
      : "°C";


  // Weather icon
  weatherIconEl.textContent =
    getWeatherIcon(data.weather);


  // City and country
  cardCityCountryEl.textContent =
    `${data.city}, ${data.country || ""}`;


  // Temperature
  cardTemperatureEl.textContent =
    `${Math.round(data.temperature)}${unitSymbol}`;


  // Weather condition
  cardConditionEl.textContent =
    data.weather || "Unknown";


  // Country
  cardCountryEl.textContent =
    data.country || "N/A";


  // Timezone
  cardTimezoneEl.textContent =
    formatTimezone(data.timezone);


  // Show weather card
  weatherCard.classList.remove(
    "hidden"
  );
}


// ==================================================
// FETCH WEATHER FROM FASTAPI
// ==================================================

async function fetchWeather(
  city,
  units
) {

  // Create API URL
  const url =
    `${API_BASE_URL}/weather/` +
    `${encodeURIComponent(city)}` +
    `?units=${units}`;


  // Show loading message
  showStatus(
    "Fetching weather data..."
  );


  // Disable search button
  searchBtn.disabled = true;


  try {

    // Send request to FastAPI
    const response =
      await fetch(url);


    // Convert response to JSON
    const data =
      await response.json();


    // ==========================================
    // INVALID CITY
    // ==========================================

    /*
      Your FastAPI currently returns:

      {
        "Error": "invalid City"
      }

      when the city does not exist.

      Therefore we check data.Error.
    */

    if (data.Error) {

      weatherCard.classList.add(
        "hidden"
      );

      showStatus(
        "City not found. Please check the city name.",
        true
      );

      return;
    }


    // ==========================================
    // OTHER SERVER ERRORS
    // ==========================================

    if (!response.ok) {

      weatherCard.classList.add(
        "hidden"
      );

      showStatus(
        "Unable to connect to the weather server.",
        true
      );

      return;
    }


    // ==========================================
    // SUCCESS
    // ==========================================

    displayWeatherData(
      data,
      units
    );

  } catch (error) {

    // Show technical error in browser console
    console.error(
      "Weather API Error:",
      error
    );


    weatherCard.classList.add(
      "hidden"
    );


    showStatus(
      "Unable to connect to the weather server.",
      true
    );

  } finally {

    // Enable button again
    searchBtn.disabled = false;

  }
}


// ==================================================
// FORM SUBMISSION
// ==================================================

weatherForm.addEventListener(
  "submit",
  function (event) {

    // Stop page from refreshing
    event.preventDefault();


    // Get city
    const city =
      cityInput.value.trim();


    // ==========================================
    // EMPTY INPUT
    // ==========================================

    if (!city) {

      weatherCard.classList.add(
        "hidden"
      );


      showStatus(
        "Please enter a city.",
        true
      );


      cityInput.focus();

      return;
    }


    // ==========================================
    // GET SELECTED UNIT
    // ==========================================

    const selectedUnitInput =
      document.querySelector(
        'input[name="units"]:checked'
      );


    const units =
      selectedUnitInput
        ? selectedUnitInput.value
        : "imperial";


    // ==========================================
    // GET WEATHER
    // ==========================================

    fetchWeather(
      city,
      units
    );

  }
);