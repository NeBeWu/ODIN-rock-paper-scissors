function computerplay() {
  //Choose a random integer between 0 and 2.
  let choiceNumber = Math.floor(Math.random() * 3);

  //Assign to each integer between 0 and 2 a string for the Rock Paper Scissors game
  switch (choiceNumber) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}

function playerPlay() {
  //Prompt player for input
  let playerChoice = window.prompt('Rock, Paper or Scissors?');

  //Check if player input complies with the game options. If it does not, prompt player a new input
  while (playerChoice.match(/^(rock|paper|scissors)$/i) === null) {
    console.log('You did not enter a valid input');
    playerChoice = window.prompt('Rock, Paper or Scissors?');
  }

  //Capitalize the input string
  playerChoice =
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

  //Return player choice
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  //Assign a number to the player and computer choices to facilitate the checking of the winner
  let checkNumber = playerSelection.length - computerSelection.length;

  //Check the winner or draw
  switch (checkNumber) {
    case -4:
    case 1:
    case 3:
      return 1;
    case -3:
    case -1:
    case 4:
      return -1;
    default:
      return 0;
  }
}

function game() {
  //Create player score
  let playerScore = 0;

  //Play five rounds
  for (let round = 1; round < 6; round++) {
    //Take player input
    let playerSelection = playerPlay();
    //Take computer input
    let computerSelection = computerplay();

    //Compute the result of the round, add/subtract point from score and show round winner
    switch (playRound(playerSelection, computerSelection)) {
      case 1:
        playerScore++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        break;
      case -1:
        playerScore--;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        break;
      case 0:
        console.log(`Draw! Both chose ${playerSelection}`);
        break;
      default:
        console.log('Switch "playRound" bug!');
    }
  }

  //Display the player final score
  if (playerScore > 0) {
    console.log(`Your score was ${playerScore}. Congratulations, you won!`);
  } else if (playerScore < 0) {
    console.log(`Your score was ${playerScore}. Too bad, you lost!`);
  } else {
    console.log(`Your score was ${playerScore}. Well, it was a draw!`);
  }
}

game();
