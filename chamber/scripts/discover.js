

//---------------
//BUILD CARDS
//---------------
async function loadPlaces() {
    try {
        const response = await fetch("./data/interest.json");
        const data = await response.json();

        const container = document.querySelector("#discover-cards");
        
        data.places.forEach(place => {
            const card = document.createElement("article");
            card.classList.add("discover-card");
            card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy" >
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button class="learn-more">Learn More</button>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Eror loading places:", error);
    }
}

loadPlaces();

//--------------------
//LAST VISIT MESSAGE
//--------------------
const message = document.querySelector("#visitor-message");
const lastVisit = Number(localStorage.getItem("lastVisit"));
const now = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";

} else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (days < 1) {
        message.textContent = "Back so soon! Awsome!";

    } else if (days === 1) {
        message.textContent = "You last visited 1 day ago.";

    } else {
        message.textContent = `You last visited ${days} days ago.`;
    }

}

localStorage.setItem("lastVisit", now);