let playerScore = 0; // Player score
let computerScore = 0; // Computer score
let playerSelection = "Rock"; // Player selection
MaxRounds = 5; // Max Rounds
currentRound = 1;
const playerScoreElement = document.getElementById("player-score"); // Player score id element
const computerScoreElement = document.getElementById("computer-score"); // Computer score id element
const currentRoundElement = document.getElementById("game-round"); // Game round id element
const currentRoundResultElement = document.getElementById("round-result");
const rockButton = document.querySelector("#rock-button"); // id for rock button
const paperButton = document.querySelector("#paper-button"); // id for paper button
const scissorsButton = document.querySelector("#scissors-button"); // id for scissors button
rockButton.addEventListener("click", setPlayerChoice); // Handle clicking
paperButton.addEventListener("click", setPlayerChoice); // Handle clicking
scissorsButton.addEventListener("click", setPlayerChoice); // Handle clicking

function getComputerChoice() {
  let computer_choice = ["Rock", "Paper", "Scissors"];
  let random_computer_choice =
    computer_choice[Math.floor(Math.random() * computer_choice.length)];
  return random_computer_choice;
}

// Update player score
function updatePlayerScore() {
  playerScore++;
}
// Update computer score
function updateComputerScore() {
  computerScore++;
}
// Update current round
function updateRound() {
  currentRound++;
}

// Function that plays a round, takes user and computer choices as parameters
function playRound(playerSelection, computerSelection) {
  round_statement = "Round Result is displayed here";

  if (playerSelection === "Rock" && computerSelection === "Paper") {
    round_statement = "You Lost! Paper beats Rock";
    computerScore++;
    return round_statement;
  }
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    round_statement = "You Won! Rock beats Scissors";
    playerScore++;
    return round_statement;
  }

  if (playerSelection === "Rock" && computerSelection === "Rock") {
    round_statement = "Tie! Rock doesn't beat Rock";
    return round_statement;
  }
  if (playerSelection === "Paper" && computerSelection === "Rock") {
    round_statement = "You Won! Paper beats Rock";
    playerScore++;
    return round_statement;
  }
  if (playerSelection === "Paper" && computerSelection === "Scissors") {
    round_statement = "You Lost! Scissors beats Paper";
    computerScore++;
    return round_statement;
  }
  if (playerSelection === "Paper" && computerSelection === "Paper") {
    round_statement = "Tie! Paper doesn't beat Paper";
    return round_statement;
  }

  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    round_statement = "You Lost! Rock beats Scissors";
    computerScore++;
    return round_statement;
  }

  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    round_statement = "You Won! Scissors beats Paper";
    playerScore++;
    return round_statement;
  }

  if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    round_statement = "Tie! Scissors doesn't beat Scissors";
    return round_statement;
  }
}
// Set player choice
function setPlayerChoice(event) {
  if (currentRound != MaxRounds) {
    const clickedButton = event.target.parentNode; // Sets the target as the parent node(button)
    if (clickedButton === rockButton) {
      playerSelection = "Rock";
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      currentRoundResultElement.textContent = round_statement;
      if (currentRound < MaxRounds) {
        updateRound();
      }
    } else if (clickedButton === paperButton) {
      playerSelection = "Paper";
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      currentRoundResultElement.textContent = round_statement;
      if (currentRound < MaxRounds) {
        updateRound();
      }
    } else if (clickedButton === scissorsButton) {
      playerSelection = "Scissors";
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      currentRoundResultElement.textContent = round_statement;
      if (currentRound < MaxRounds) {
        updateRound();
      }
    }
    playGame();
  }
}

function playGame() {
  playerScoreElement.textContent = `Player Score: ${playerScore}`;
  computerScoreElement.textContent = `Computer Score: ${computerScore}`;
  currentRoundElement.textContent = `Round: ${currentRound}`;

  if (currentRound == MaxRounds) {
    setTimeout(function () {
      if (playerScore > computerScore) {
        alert(
          `You won the game!\nYou scored ${playerScore} points\nComputer scored ${computerScore} point(s)`
        );
        let result = window.confirm("Do you want to play again?"); // Ask player if they want to play again
        if (result) {
          window.location.reload();
        } else {
          window.close();
        }
      }

      if (computerScore > playerScore) {
        alert(
          `You lost the game!\nYou scored ${playerScore} point(s)\nComputer scored ${computerScore} point(s)`
        );
        let result = window.confirm("Do you want to play again?");
        if (result) {
          window.location.reload();
        } else {
          window.close();
        }
      }

      if (playerScore == computerScore) {
        alert(`It's a tie!\nYou and the Computer both scored ${playerScore}`);
        let result = window.confirm("Do you want to play again?");
        if (result) {
          window.location.reload();
        } else {
          window.close();
        }
      }
    }, 2000); // Delay of 3 seconds
  }
}

playGame();
