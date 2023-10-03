
// Array of possible choices
const choices = ["rock", "paper", "scissors"];

// Function to generate a random computer choice
function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round of the game
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Function to update the game status
function updateStatus(playerChoice, computerChoice, result) {
  const statusHead = document.getElementById("status-head");
  const playerDisplay = document.getElementById("player-choice");
  const computerDisplay = document.getElementById("computer-choice");

  statusHead.textContent = result;
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
}

// Function to handle player's choice
function makeChoice(playerChoice) {
  const computerChoice = computerPlay();
  const result = playRound(playerChoice, computerChoice);
  updateStatus(playerChoice, computerChoice, result);
}

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  const statusHead = document.getElementById("status-head");
  statusHead.textContent = "Choose Your Move";
});