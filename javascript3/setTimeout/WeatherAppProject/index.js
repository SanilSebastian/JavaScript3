const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "d498fc58320ff0935a20ad97ac54674a"; // Your OpenWeatherMap API key
const meteoApiKey = "YOUR_METEO_API_KEY"; // Your Open Meteo API key

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (city) {
        displayLoading();
        try {
            // Fetch weather data from the new API
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error('Error:', error);
            displayError(error.message);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    // Use the Open Meteo API endpoint
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&city=${city}&apikey=${meteoApiKey}`;
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Could not fetch weather data for "${city}". Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Network error:', error);
        throw new Error("Network error. Please try again.");
    }
}

function displayWeatherInfo(data) {
    if (!data || !data.city || !data.hourly || !data.hourly.temperature_2m) {
        displayError("Weather data not available");
        return;
    }

    const city = data.city.name;
    const temperature = data.hourly.temperature_2m.value;
    const humidity = data.hourly.humidity.value;
    const description = data.hourly.weather.description;
    const id = data.hourly.weather.id;
    const tempCelsius = (temperature).toFixed(1);

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = createElement("h1", city, "cityDisplay");
    const tempDisplay = createElement("p", `${tempCelsius}°C`, "tempDisplay");
    const humidityDisplay = createElement("p", `Humidity: ${humidity}%`, "humidityDisplay");
    const descDisplay = createElement("p", description, "descDisplay");
    const weatherEmoji = createElement("p", getWeatherEmoji(id), "weatherEmoji");

    card.append(cityDisplay, tempDisplay, humidityDisplay, descDisplay, weatherEmoji);
}



function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300): return "🌧️";
        case (weatherId >= 300 && weatherId < 400): return "🌧️";
        case (weatherId >= 500 && weatherId < 600): return "🌧️";
        case (weatherId >= 600 && weatherId < 700): return "❄️";
        case (weatherId >= 700 && weatherId < 800): return "♒";
        case (weatherId === 800): return "☀️";
        case (weatherId >= 801 && weatherId < 810): return "☁️";
        default: return "❓";
    }
}

function displayError(message) {
    const errorDisplay = createElement("p", message, "errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

function displayLoading() {
    const loadingDisplay = createElement("p", "Loading...", "loadingDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(loadingDisplay);
}

function createElement(tag, textContent, className) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    if (className) {
        element.classList.add(className);
    }
    return element;
}
