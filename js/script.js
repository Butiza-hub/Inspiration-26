// Get date and time elements
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString(undefined, options);
    timeEl.textContent = now.toLocaleTimeString();
}

// Update immediately and every second
updateDateTime();
setInterval(updateDateTime, 1000);