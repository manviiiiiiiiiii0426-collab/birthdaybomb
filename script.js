const compliments = [
  "You're the secret cheat code to my heart. 💘",
  "Your smile has better pixels than 4K! 😁",
  "You're rarer than a shiny Pokémon. ✨",
  "You + me = high score. 🕹️",
  "You're the player 1 to my player 2. 🎮",
  "If I had to choose a power-up, I'd choose YOU. 💥",
  "You're better than unlimited lives. ❤️",
  "You're my favorite mission... forever. 🚀",
];

let index = 0;
const complimentBox = document.getElementById("complimentText");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  if (index < compliments.length) {
    complimentBox.textContent = compliments[index];
    nextBtn.textContent = "▶ NEXT";
    index++;
  } else {
    complimentBox.textContent = "You've unlocked all compliments for today! 🎉";
    nextBtn.textContent = "💖 REPLAY";
    index = 0;
  }
});

