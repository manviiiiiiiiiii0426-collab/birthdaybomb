const messages = {
  1: "🎉 You opened the Party Door! Let's celebrate the most special soul ever — YOU!",
  2: "💌 You opened the Love Letter Door... this reminds me of how many girls are crazy about you, do you feel blessed??",
  3: "🌠 You picked the Starry Door... I wished for someone magical — but the universe gave me *you*."
};

function revealMessage(doorNumber) {
  const sound = document.getElementById("revealSound");
  sound.play();

  const doors = document.querySelectorAll('.door');
  doors.forEach(d => d.classList.remove('clicked'));
  doors[doorNumber - 1].classList.add('clicked');

  const msgBox = document.getElementById("messageBox");
  msgBox.style.display = "block";
  msgBox.innerHTML = ""; // clear existing

  const message = messages[doorNumber];
  typeWriter(message, msgBox);
}

function typeWriter(text, element, i = 0) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(text, element, i + 1), 40);
  }
}

