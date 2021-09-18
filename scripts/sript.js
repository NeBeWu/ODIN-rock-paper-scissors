//Create player and computer scores
let playerScore = 0;
let computerScore = 0;

//Adds a response to button click, initializing a round
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
  

    let roundPoint = playRound(e);

    switch (roundPoint) {
      case 1:
        playerScore++;
        break;
      case -1:
        computerScore++;
        break;
    }

    changeScore(playerScore, computerScore);

    if (playerScore >= 5) {
      window.alert(
        'Congratulations, you won!\n\n If you want to play again, please refresh the page.'
      );
    } else if (computerScore >= 5) {
      window.alert(
        'Too bad, you lost!\n\n If you want to play again, please refresh the page.'
      );
    }
  });
});

//Outputs randomly a rock, paper or scissors string; simulating the computer play
function computerPlay() {
  //Chooses a random integer between 0 and 2.
  let choiceNumber = Math.floor(Math.random() * 3);

  //Outputs to each integer between 0 and 2 a rock, paper or scissors string
  switch (choiceNumber) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}

//Converts a button click event to the corresponding rock, paper or scissors string
function playerPlay(e) {
  //Obtains the id of the clicked button
  let playerChoice = e.currentTarget.id;

  //Outputs to each button id a rock, paper or scissors string
  switch (playerChoice) {
    case 'rockButton':
      return 'Rock';
    case 'paperButton':
      return 'Paper';
    case 'scissorsButton':
      return 'Scissors';
  }
}

//Displays the results
function displayResult(message) {
  const display = document.querySelector('#results');

  const content = document.createElement('p');

  content.textContent = message;

  display.prepend(content);
}

//Changes the score
function changeScore(playerPoints, computerPoints) {
  const playerScore = document.getElementById('playerScore');
  const computerScore = document.getElementById('computerScore');

  playerScore.textContent = `Player: ${playerPoints}`;
  computerScore.textContent = `Computer: ${computerPoints}`;

  return;
}

//Plays a round of the rock-paper-scissors game
function playRound(e) {
  //Collects the player and computer plays
  let playerSelection = playerPlay(e);
  let computerSelection = computerPlay();

  //Assigns a number to the player and computer choices to facilitate checking result
  let checkNumber = playerSelection.length - computerSelection.length;

  //Checks the winner or draw
  switch (checkNumber) {
    case -4:
    case 1:
    case 3:
      displayResult(`You Win! ${playerSelection} beats ${computerSelection}`);
      return 1;
    case -3:
    case -1:
    case 4:
      displayResult(`You Lose! ${computerSelection} beats ${playerSelection}`);
      return -1;
    default:
      displayResult(`Draw! Both chose ${playerSelection}`);
      return 0;
  }
}
