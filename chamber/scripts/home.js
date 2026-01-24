// weather 
const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=West+Valley+City,US&units=imperial&appid=2aba3d41dedddf32b9c073fd10cc1004';
const city = "West Valley City";
const units = "imperial";

async function getWeather() {
    try {
        // Current weather
        const currentResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=West+Valley+City,US&units=imperial&appid=2aba3d41dedddf32b9c073fd10cc1004`
        );
        const currentData = await currentResponse.json();
        document.getElementById("temp").textContent = Math.round(currentData.main.temp);
        document.getElementById("description").textContent = currentData.weather[0].description;

        // Forecast (3 days)
        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=West+Valley+City,US&units=imperial&appid=2aba3d41dedddf32b9c073fd10cc1004`
        );
        const forecastData = await forecastResponse.json();

        const forecastList = document.getElementById("forecast");
        forecastList.innerHTML = "";

        // Filter next 3 days at noon
        const dailyForecasts = forecastData.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
       
        dailyForecasts.forEach(day => {
            const li = document.createElement("li");
            li.innerHTML = `
            <strong>${new Date(day.dt_txt).toLocaleDateString()}</strong><br>
            ${Math.round(day.main.temp)}°F <br>
            ${day.weather[0].description}
            `;
            forecastList.appendChild(li);
        });
    } catch (error) {
        console.error("Weather fetch error:", error);
    }
}

getWeather();

// load members from json
async function loadspotlights() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        //Filter gold +silver members
        const qualified = members.members.filter(member =>
            member.membership === 3 || member.membership === 2
        );

        // shuffle array
        const shuffled = qualified.sort(() => 0.5 - Math.random());
        

        //pick 2 or 3
        const spotlightCount = Math.random() < 0.5 ? 2 : 3;
        const selected = shuffled.slice(0, spotlightCount);


        displaySpotlights(selected);
    } catch (error) {
        console.error("Error loading members:", error); 
    }
}

//Render members
function displaySpotlights(members) {
    const container = document.querySelector('#spotlights');
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add('spotlight-card');

        card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        //Append card to container
        container.appendChild(card);

    });
}
loadspotlights();
//footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
