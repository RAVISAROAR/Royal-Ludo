
const pawn = document.getElementById('pawn');
const diceSound = document.getElementById('diceSound');
const moveSound = document.getElementById('moveSound');
const winSound = document.getElementById('winSound');
const bgMusic = document.getElementById('bgMusic');
let position = 0;

function rollDice() {
  diceSound.play();
  const roll = Math.floor(Math.random() * 6) + 1;
  movePawn(roll);
}

function movePawn(steps) {
  position += steps;
  if (position >= 20) {
    winSound.play();
    alert('🏆 Your Majesty Wins!');
    position = 0;
  }
  const x = 150 + (position * 10);
  const y = 150;
  pawn.style.left = x + 'px';
  pawn.style.top = y + 'px';
  moveSound.play();
}

function toggleSound() {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}
