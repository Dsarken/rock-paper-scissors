let playerScore = 0; // Player score
let computerScore = 0; // Computer score
MaxRounds = 5; // Max Rounds

function getComputerChoice() {
  let computer_choice = ["Rock", "Paper", "Scissors"];
  let random_computer_choice =
    computer_choice[Math.floor(Math.random() * computer_choice.length)];
  return random_computer_choice;
}

function playRound(playerSelection, computerSelection) {
  round_statement = "";
  let acceptable_player_rock_inputs = ["Rock", "rock", "ROCK"];
  let acceptable_player_paper_inputs = ["Paper", "paper", "PAPER"];
  let acceptable_player_scissors_inputs = ["Scissors", "scissors", "SCISSORS"];
  if (
    acceptable_player_rock_inputs.includes(playerSelection) &&
    computerSelection === "Paper"
  ) {
    round_statement = "You Lost! Paper beats Rock";
    computerScore++;
    return round_statement;
  }
  if (
    acceptable_player_rock_inputs.includes(playerSelection) &&
    computerSelection === "Scissors"
  ) {
    round_statement = "You Won! Rock beats Scissors";
    playerScore++;
    return round_statement;
  }

  if (
    acceptable_player_rock_inputs.includes(playerSelection) &&
    computerSelection === "Rock"
  ) {
    round_statement = "Tie! Rock doesn't beat Rock";
    return round_statement;
  }
  if (
    acceptable_player_paper_inputs.includes(playerSelection) &&
    computerSelection === "Rock"
  ) {
    round_statement = "You Won! Paper beats Rock";
    playerScore++;
    return round_statement;
  }
  if (
    acceptable_player_paper_inputs.includes(playerSelection) &&
    computerSelection === "Scissors"
  ) {
    round_statement = "You Lost! Scissors beats Paper";
    computerScore++;
    return round_statement;
  }
  if (
    acceptable_player_paper_inputs.includes(playerSelection) &&
    computerSelection === "Paper"
  ) {
    round_statement = "Tie! Paper doesn't beat Paper";
    return round_statement;
  }

  if (
    acceptable_player_scissors_inputs.includes(playerSelection) &&
    computerSelection === "Rock"
  ) {
    round_statement = "You Lost! Rock beats Scissors";
    computerScore++;
    return round_statement;
  }

  if (
    acceptable_player_scissors_inputs.includes(playerSelection) &&
    computerSelection === "Paper"
  ) {
    round_statement = "You Won! Scissors beats Paper";
    playerScore++;
    return round_statement;
  }

  if (
    acceptable_player_scissors_inputs.includes(playerSelection) &&
    computerSelection === "Scissors"
  ) {
    round_statement = "Tie Scissors doesn't beat Scissors";
    return round_statement;
  }
}

function playGame() {
  alert(
    "This is a game of Rock, Paper, Scissors against the computer\nThere are 5 rounds, whoever wins the most rounds wins the game"
  );
  for (let i = 1; i <= MaxRounds; i++) {
    alert(
      `Round ${i}\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`
    ); // Main score display for player
    const playerSelection = prompt("Enter your choice: "); // Prompts player for input
    const computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    alert(
      `You won the game!\nYou scored ${playerScore} points\nComputer scored ${computerScore} point(s)`
    );
    let result = window.confirm("Do you want to play again?"); // Ask player if they want to play again
    if (result) {
      playerScore = 0;
      computerScore = 0;
      playGame();
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
      playerScore = 0;
      computerScore = 0;
      playGame();
    } else {
      window.close();
    }
  }

  if (playerScore == computerScore) {
    alert(`It's a tie!\nYou and the Computer both scored ${playerScore}`);
    let result = window.confirm("Do you want to play again?");
    if (result) {
      playerScore = 0;
      computerScore = 0;
      playGame();
    } else {
      window.close();
    }
  }
}

playGame();
