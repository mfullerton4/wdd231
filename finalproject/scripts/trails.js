const trailContainer = document.querySelector("#trail-container");
const gridBtn = document.querySelector("#grid-view");
const listBtn = document.querySelector("#list-view");
const modal = document.querySelector("#trail-modal");
const modalContent = document.querySelector("#modal-content");
const closeModal = document.querySelector("#close-modal");

// Load saved view mode
const savedView = localStorage.getItem("trailView") || "grid";
trailContainer.className = savedView + "-view";
if (savedView === "grid") gridBtn.classList.add("active");
else listBtn.classList.add("active");

// Fetch Trails
async function loadTrails() {
    try {
        const response = await fetch("data/trails.json");
        if (!response.ok) throw new Error("Failed to load trail data");

        const data = await response.json();
        displayTrails(data.trails);
    } catch (error) {
        console.error("Error loading trails:", error);
        trailContainer.innerHTML = `<P class="error">Unable to load trail data.</p>`;
    }
}

function displayTrails(trails) {
    trailContainer.innerHTML = "";

    trails.forEach(trail => {
        const card = document.createElement("article");
        card.classList.add("trail-card");

        card.innerHTML = `
       <img src="${trail.image}" alt= "${trail.name}">
        <h2>${trail.name}</h2>
        <span class="badge ${trail.difficulty.toLowerCase()}">${trail.difficulty}</span>
        <p>${trail.distance_miles} miles • ${trail.elevation_gain_ft} ft gain</p>
        <button class="details-btn" data-id="${trail.id}">Details</button>
        `;
        trailContainer.appendChild(card);
    });

    document.querySelectorAll(".details-btn").forEach(btn => {
        btn.addEventListener("click", (e) => openModal(trails, e.target.dataset.id));
    });
}

function openModal(trails, id) {
    const trail = trails.find(t => t.id == id);

    modalContent.innerHTML = `
    <h2>${trail.name}</h2>
    <img src="${trail.image}" alt="${trail.name}">
    <p>${trail.description}<p>
    <ul>
    <li><strong>Difficulty:</strong> ${trail.difficulty}</li>
    <li><strong>Distance:</strong> ${trail.distance_miles} miles</li>
    <li><strong>Elevation Gain:</strong> ${trail.elevation_gain_ft} ft</li>
    <li><strong>Location:</strong> ${trail.location}</li>
    </ul>
    `;
    modal.showModal();
}
closeModal.addEventListener("click", () => modal.close());

// View Toggle
gridBtn.addEventListener("click", () => setView("grid"));
listBtn.addEventListener("click", () => setView("list"));

function setView(view) {
    trailContainer.className = view + "-view";
    gridBtn.classList.toggle("active", view === "grid");
    listBtn.classList.toggle("active", view === "list");
    localStorage.setItem("trailView", view);
}

// Initialize
loadTrails();