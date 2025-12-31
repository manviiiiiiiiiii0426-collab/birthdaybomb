const messages = [
  "My heart skips a beat on every phone call💓",
  "You're the swiftest rhythm 🥰",
  "Ba-dum ba-dum... that's you 💘",
  "Tap again, stop blushing! 😚",
  "Heartbeat synced with love 💞 i m sorry chatgpt wrote theseeeee i swear"
];

let count = 0;

function beatHeart() {
  const msg = document.getElementById("message");
  msg.textContent = messages[count % messages.length];
  count++;
}
