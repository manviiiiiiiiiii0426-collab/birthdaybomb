const message = `Dear Buddhu 🥹,

I know you didn't tell me about birthday... 
But I couldn’t let the month go by without making you smile.

Each day, I’ll reveal just a little more about how special you are.

Happy Day 4, cutie buddhu hooman. 💌

— Your Sadu Birthday wisher ✨`;

let i = 0;
const speed = 50;
const textElement = document.getElementById("typewriter");

function typeWriter() {
  if (i < message.length) {
    textElement.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
