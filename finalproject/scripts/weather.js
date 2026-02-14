const weatherBox = document.querySelector("#weather-content");
const forecastBox = document.querySelector("#forecast-container");

//Salt Lake City coordinates
const lat = 40.7608;
const lon = -111.8910;

async function loadWeather() {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&timezone=auto`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error("WEather data failed to load");

        const data = await response.json();
        displayCurrentWeather(data.current_weather);
        displayForecast(data.daily);

    } catch (error) {
        weatherBox.innerHTML = `<p class="error">Unable to load weather data.</p>`;
        console.error(error);
    } 
}

function displayCurrentWeather(current) {
    weatherBox.innerHTML = `
    <p><strong>Temperature:</strong> ${current.temperature}°F</p>
    <p><strong>Wind:</strong> ${current.windspeed} mph</p>
    <p><strong>Conditions:</strong> ${current.weathercode}</p>
    `;
}

function displayForecast(daily) {
    forecastBox.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        const day = document.createElement("div");
        day.classList.add("forecast-day");

        day.innerHTML = `
            <h3>${daily.time[i]}</h3>
            <p><strong>High:</strong> ${daily.temperature_2m_max[i]}°F</p>
            <p><strong>Low:</strong> ${daily.temperature_2m_min[i]}°F</p>
            <p><strong>Rain Chance:</strong> ${daily.precipitation_probability_max[i]}%</p>
            `;
        
        forecastBox.appendChild(day);
    }
}
loadWeather();