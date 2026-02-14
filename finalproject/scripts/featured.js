import { getTrails } from "./trailData.js";

const featuredContainer = document.querySelector("#featured-container");

async function loadFeatured() {
    const trails = await getTrails();

    const featured = trails.filter(trail => trail.featured === true);

    featured.forEach(trail => {
        const card = document.createElement("div");
        card.classList.add("trail-card");

        card.innerHTML = `
        <img src="${trail.image}" alt= "${trail.name}">
        <h3>${trail.name}</h3>
        <span class="badge ${trail.difficulty.toLowerCase()}">${trail.difficulty}</span>
        <p>${trail.distance_miles} miles • ${trail.elevation_gain_ft} ft gain</p>
        <a href="trails.html?id=${trail.id}" class="details-btn">View Details</a>
        `;

        featuredContainer.appendChild(card);
    });
}

loadFeatured();