const compliments = [
  "You're the cutest rasgulla i've ever known. 💘",
  "Your smile has better pixels than 4K! 😁",
  "You're rarer than a shiny Pokémon. ✨",
  "You + your laptops = best couple. 🕹️",
  "You're the most dramatic kind i have ever known and that's the best. 🎮",
  "If I had to choose a power-up, I'd choose YOU. 💥",
  "You're better when you are less cranky. ❤️",
  "You're my favorite NRI dumbo.... 🚀",
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

