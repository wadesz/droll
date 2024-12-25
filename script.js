let currentRoll = 1000;

const rollButton = document.getElementById('rollButton');
const resetButton = document.getElementById('resetButton');
const currentRollDisplay = document.getElementById('currentRoll');
const buttonSound = document.getElementById('button-sound');
const gameOverSound = document.getElementById('game-over-sound');
let gameOver = false; // Track if the game is over

// Handle roll button click
rollButton.addEventListener('click', () => {
  if (gameOver || rollButton.disabled) return;

  const newButtonSound = buttonSound.cloneNode(); // Clone sound for concurrent playback
  newButtonSound.play().catch((error) => console.log('Audio playback failed:', error));

  rollButton.disabled = true; // Disable button to prevent multiple clicks during delay

  // Add a delay to enhance suspense
  setTimeout(() => {
    currentRoll = Math.floor(Math.random() * currentRoll) + 1; // Randomize roll

    if (currentRoll === 1) {
      currentRollDisplay.textContent = "You've reached 1! Game Over!";
      gameOverSound.play().catch((error) => console.log('Audio playback failed:', error));
      rollButton.disabled = true; // Disable button permanently after game over
      gameOver = true;
    } else {
      currentRollDisplay.textContent = `Current Roll: ${currentRoll}`;
      rollButton.disabled = false; // Re-enable button for the next roll
    }
  }, 500); // Add a 0.5-second delay
});

// Handle reset button click
resetButton.addEventListener('click', () => {
  currentRoll = 1000;
  currentRollDisplay.textContent = "Press Roll to Start!";
  rollButton.disabled = false; // Re-enable button
  gameOver = false; // Reset game over flag
});
