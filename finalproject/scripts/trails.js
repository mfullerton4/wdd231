trailData.js

export async function getTrails() {
    try {
        const response = await fetch("data/trails.json");
        if (!response.ok) throw new Error("Failed to load trail data");

        const data = await response.json();
        return data.trails;   // THIS is the key line
    } catch (error) {
        console.error("Error loading trails:", error);
        return []; // prevents homepage from breaking
    }
}
