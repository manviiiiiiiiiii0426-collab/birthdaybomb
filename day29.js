const messages = [
  "My heart skips a beat for you 💓",
  "You're the rhythm to my heartbeat 🥰",
  "Ba-dum ba-dum... that's you 💘",
  "Tap again, I’m still blushing! 😚",
  "Heartbeat synced with love 💞"
];

let count = 0;

function beatHeart() {
  const msg = document.getElementById("message");
  msg.textContent = messages[count % messages.length];
  count++;
}
