let currentRoll = 1000; // Starting value
let gameOver = false; // Track if the game is over

// DOM elements
const rollButton = document.getElementById('rollButton');
const resetButton = document.getElementById('resetButton');
const currentRollDisplay = document.getElementById('currentRoll');
const buttonSound = document.getElementById('button-sound');
const gameOverSound = document.getElementById('game-over-sound');

// Handle roll button click
rollButton.addEventListener('click', () => {
  if (gameOver || rollButton.disabled) return; // Prevent clicking when game is over or during delay

  // Clone the sound to ensure it plays each time
  const newButtonSound = buttonSound.cloneNode();
  newButtonSound.play().catch((error) => console.log('Audio playback failed:', error));

  rollButton.disabled = true; // Temporarily disable the button

  // Add suspense delay before updating roll
  setTimeout(() => {
    currentRoll = Math.floor(Math.random() * currentRoll) + 1; // Generate new roll

    if (currentRoll === 1) {
      // Game over scenario
      currentRollDisplay.textContent = "You've reached 1! Game Over!";
      gameOverSound.play().catch((error) => console.log('Audio playback failed:', error));
      rollButton.disabled = true; // Permanently disable the button
      gameOver = true; // Set game over state
    } else {
      // Update roll number
      currentRollDisplay.textContent = `Current Roll: ${currentRoll}`;
      rollButton.disabled = false; // Re-enable the button for the next roll
    }
  }, 500); // Delay for suspense
});

// Handle reset button click
resetButton.addEventListener('click', () => {
  // Reset all game states
  currentRoll = 1000;
  gameOver = false;
  currentRollDisplay.textContent = "Press Roll to Start!";
  rollButton.disabled = false; // Enable the roll button
});
