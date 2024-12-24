let currentRoll = 1000;

const rollButton = document.getElementById('rollButton');
const resetButton = document.getElementById('resetButton');
const currentRollDisplay = document.getElementById('currentRoll');

// Handle roll button click
rollButton.addEventListener('click', () => {
  if (currentRoll > 1) {
    currentRoll = Math.floor(Math.random() * currentRoll) + 1;
    if (currentRoll === 1) {
      currentRollDisplay.textContent = "You've reached 1! Game Over!";
      rollButton.disabled = true;
    } else {
      currentRollDisplay.textContent = `Current Roll: ${currentRoll}`;
    }
  }
});

// Handle reset button click
resetButton.addEventListener('click', () => {
  currentRoll = 1000;
  currentRollDisplay.textContent = "Press Roll to Start!";
  rollButton.disabled = false;
});
