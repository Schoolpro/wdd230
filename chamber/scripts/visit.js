const currentVisit = Date.now();

const lastVisit = Number(window.localStorage.getItem("lastVisit")) || currentVisit;

const timeDifference = currentVisit - lastVisit;

const daysBetweenVisits = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

const visitMessage = document.getElementById("visit-message");

if (timeDifference === 0) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysBetweenVisits < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
} else if (daysBetweenVisits === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
} else {
    visitMessage.textContent = `You last visited ${daysBetweenVisits} days ago.`;
}

window.localStorage.setItem("lastVisit", currentVisit);
