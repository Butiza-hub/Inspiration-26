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

// =============================
// Inspirational Messages
// File: js/script.js
// =============================

const messages = [
"Believe in yourself even when no one else does.",
"Small progress is still progress.",
"Discipline will take you where motivation can’t.",
"Your only limit is your mindset.",
"Dream big. Start small. Act now.",
"Consistency beats intensity.",
"Every day is a fresh start.",
"You are stronger than you think.",
"Action cures fear.",
"Growth begins outside your comfort zone.",
"Your future is created by what you do today.",
"Stay patient and trust your journey.",
"Make yourself proud.",
"Success is built daily, not overnight.",
"You didn’t come this far to stop now.",
"Push through the hard days.",
"Focus on progress, not perfection.",
"Be fearless in the pursuit of greatness.",
"Your potential is endless.",
"Turn pain into power.",
"Hard work compounds.",
"Keep going. You’re closer than you think.",
"Success starts with self-belief.",
"Rise. Grind. Repeat.",
"Energy flows where focus goes.",
"Be the reason someone believes today.",
"Great things take time.",
"Your mindset shapes your reality.",
"Nothing changes if nothing changes.",
"Build habits that build you.",
"Stay hungry. Stay humble.",
"You are capable of amazing things.",
"Done is better than perfect.",
"Fall seven times, stand up eight.",
"Effort never goes unnoticed.",
"Don’t wait. Create.",
"Make today count.",
"Progress, not excuses.",
"Stay focused. Stay consistent.",
"Your breakthrough is coming."
];

// Get the message elements
const messageText = document.getElementById("messageText");
const generateBtn = document.getElementById("generateBtn");

// Track last message index to prevent repeats
let lastIndex = -1;

// =============================
// Generate Random Message with Fade-In & Prevent Repeat
// =============================
generateBtn.addEventListener("click", () => {
    let randomIndex;

    // Prevent same message twice in a row
    do {
        randomIndex = Math.floor(Math.random() * messages.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    // Typing / fade-in effect
    const message = messages[randomIndex];
    messageText.textContent = "";
    messageText.style.opacity = 0;

    let i = 0;
    const typingSpeed = 40; // ms per character

    function typeChar() {
        if (i < message.length) {
            messageText.textContent += message.charAt(i);
            i++;
            messageText.style.opacity = 1;
            setTimeout(typeChar, typingSpeed);
        }
    }

    typeChar();
});