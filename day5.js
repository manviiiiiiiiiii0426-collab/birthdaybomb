const sky = document.getElementById("sky");

const messages = [
  "i miss the chalant you, ayan 💫",
  "Your tantrum makes everything better 🥰",
  "You're the reason this month is magical ✨",
  "I adore your goofy face 😋",
  "You're my favorite buddhu in every galaxy 🌌",
  "Buddhu, but iitian buddhu 💖"
  "Ab gussa mat hona, i was just kidding. "
];

function createStar(index) {
  const star = document.createElement("div");
  star.className = "star";

  // Random position
  const x = Math.random() * window.innerWidth * 0.9;
  const y = Math.random() * (window.innerHeight - 200);
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  star.addEventListener("click", () => {
    const message = document.createElement("div");
    message.className = "message-bubble";
    message.innerText = messages[index];
    message.style.left = `${x + 15}px`;
    message.style.top = `${y - 10}px`;
    sky.appendChild(message);

    // Remove message after 4 seconds
    setTimeout(() => {
      message.remove();
    }, 4000);
  });

  sky.appendChild(star);
}

// Create 6 stars
for (let i = 0; i < 6; i++) {
  createStar(i);
}
