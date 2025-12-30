const puzzleBoard = document.getElementById("puzzle-board");

// Set image path
const image = "assests/puzzle.jpg";

// Create 3x3 puzzle (9 pieces)
let order = [...Array(9).keys()];
order = order.sort(() => Math.random() - 0.5); // Shuffle

order.forEach((index) => {
  const piece = document.createElement("div");
  piece.className = "puzzle-piece";
  piece.style.backgroundImage = `url('${image}')`;
  piece.style.backgroundPosition = `-${(index % 3) * 100}px -${Math.floor(index / 3) * 100}px`;
  piece.draggable = true;
  piece.dataset.index = index;

  piece.addEventListener("dragstart", dragStart);
  piece.addEventListener("dragover", dragOver);
  piece.addEventListener("drop", dropPiece);

  puzzleBoard.appendChild(piece);
});

let dragSrcEl = null;

function dragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
}

function dragOver(e) {
  e.preventDefault();
  return false;
}

function dropPiece(e) {
  e.stopPropagation();
  if (dragSrcEl !== this) {
    const tempStyle = dragSrcEl.style.backgroundPosition;
    const tempIndex = dragSrcEl.dataset.index;

    dragSrcEl.style.backgroundPosition = this.style.backgroundPosition;
    dragSrcEl.dataset.index = this.dataset.index;

    this.style.backgroundPosition = tempStyle;
    this.dataset.index = tempIndex;

    checkWin();
  }
}

function checkWin() {
  const pieces = document.querySelectorAll(".puzzle-piece");
  const correct = [...pieces].every((piece, i) => parseInt(piece.dataset.index) === i);

  if (correct) {
    setTimeout(() => alert("🎉 You completed the puzzle! Happy Day 3! Happiest birthday Ayan"), 200);
  }
}
