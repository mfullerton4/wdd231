// Read URL parameters
const params = new URLSearchParams(window.location.search);

// Extract values
const firstName = params.get("firstName");
const lastName = params.get("lastName");
const address = params.get("address");
const city = params.get("city");
const state = params.get("state");
const country = params.get("country");
const email = params.get("email");

// Display them
const results = document.getElementById("results-container");

results.innerHTML = `
<p><strong>First Name:</strong> ${firstName}</p>
<p><strong>Last Name:</strong> ${lastName}</p>
<p><strong>Address:</strong> ${address}</p>
<p><strong>City:</strong> ${city}</p>
<p><strong>State:</strong> ${state}</p>
<p><strong>Country:</strong> ${countery}</p>
<p><strong>Email:</strong> ${email}</p>
`;

// Store name in localStorage
localStorage.setItem("userName", firstName);