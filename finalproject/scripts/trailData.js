export async function getTrails() {
    const response = await fetch("./data/trails.json");
    const data = await response.json();
    return data.trails;
}