const messages = [
  "You're amazing!",
  "Happiest 27th!",
  "You're hot and sexy but i miss the cute youuuuu!",
  "Budhhu, you're the best!",
  "Surprise! More pages coming!",
  "31 days won't be enough!"
];

const balloonContainer = document.getElementById('balloonContainer');
const finalMessage = document.getElementById('finalMessage');

let poppedCount = 0;

function createBalloon(index) {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.title = "Pop me!";

  balloon.addEventListener('click', () => {
    balloon.style.display = 'none';

    const msg = document.createElement('div');
    msg.className = 'message';
    msg.textContent = messages[index];
    balloonContainer.appendChild(msg);
    msg.style.display = 'block';

    poppedCount++;
    if (poppedCount === messages.length) {
      finalMessage.style.display = 'block';
    }
  });

  balloonContainer.appendChild(balloon);
}

for (let i = 0; i < messages.length; i++) {
  createBalloon(i);
}
