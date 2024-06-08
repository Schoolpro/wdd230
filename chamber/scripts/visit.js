// Get the current date
const currentVisit = Date.now();

// Get the stored date of the last visit from localStorage, or set it to the current visit if it's the first visit
const lastVisit = Number(window.localStorage.getItem("lastVisit")) || currentVisit;

// Calculate the time difference in milliseconds
const timeDifference = currentVisit - lastVisit;

// Convert the time difference to days
const daysBetweenVisits = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Get the visit message element
const visitMessage = document.getElementById("visit-message");

// Update the visit message based on the time between visits
if (timeDifference === 0) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysBetweenVisits < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
} else if (daysBetweenVisits === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
} else {
    visitMessage.textContent = `You last visited ${daysBetweenVisits} days ago.`;
}

// Store the current visit date in localStorage
window.localStorage.setItem("lastVisit", currentVisit);
