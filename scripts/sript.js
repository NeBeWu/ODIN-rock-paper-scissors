//Initializes players scores and winner
let playerScore = 0;
let computerScore = 0;

let winner = '';

//Adds a response to button click, playing a round, updating the
//score and checking if we have a winner
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    //Play a round on button click event
    let roundResult = playRound(e);

    //Update "virtual" and "visual" scores
    updateScore(roundResult);

    winner = checkWinner();

    if (winner) {
      endGame(winner);
    }
  });
});

//Plays a round of the rock-paper-scissors game and returns
//the result
function playRound(e) {
  //Collect the player and computer plays
  let playerSelection = playerPlay(e);
  let computerSelection = computerPlay();

  //Check the result
  let roundResult = checkResult(playerSelection, computerSelection);

  //Display the result
  displayResult(roundResult, playerSelection, computerSelection);

  return roundResult;
}

//Converts button click to rock, paper or scissors string
function playerPlay(e) {
  let playerChoice = e.currentTarget.id;

  switch (playerChoice) {
    case 'rockButton':
      return 'Rock';
    case 'paperButton':
      return 'Paper';
    case 'scissorsButton':
      return 'Scissors';
  }
}

//Outputs randomly a rock, paper or scissors string
function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}

//Checks round result by converting players choices to a number
//which facilitates checking the result
function checkResult(playerSelection, computerSelection) {
  let checkNumber = playerSelection.length - computerSelection.length;

  switch (checkNumber) {
    case -4:
    case 1:
    case 3:
      return 'Player';
    case -3:
    case -1:
    case 4:
      return 'Computer';
    default:
      return 'Draw';
  }
}

//Displays the result of the round by attaching a paragraph
//in the results div
function displayResult(roundResult, playerSelection, computerSelection) {
  const display = document.querySelector('#results');
  const content = document.createElement('p');

  switch (roundResult) {
    case 'Player':
      content.textContent = `You won this round! ${playerSelection} beats ${computerSelection}`;
      break;
    case 'Computer':
      content.textContent = `You lost this round! ${computerSelection} beats ${playerSelection}`;
      break;
    case 'Draw':
      content.textContent = `It was a draw! Both chose ${playerSelection}`;
      break;
  }

  display.prepend(content);
}

//Updates "virtual" and "visual" scores
function updateScore(roundResult) {
  const playerVisualScore = document.getElementById('playerScore');
  const computerVisualScore = document.getElementById('computerScore');

  //Update "virtual" score
  switch (roundResult) {
    case 'Player':
      playerScore++;
      break;
    case 'Computer':
      computerScore++;
      break;
    case 'Draw':
      break;
  }

  //Update "visual" score
  playerVisualScore.textContent = `Player: ${playerScore}`;
  computerVisualScore.textContent = `Computer: ${computerScore}`;

  return;
}

//Checks if we have a winner already
function checkWinner() {
  if (playerScore >= 5) {
    return 'Player';
  } else if (computerScore >= 5) {
    return 'Computer';
  } else {
    return '';
  }
}

//Ends the game showing a popup with an end message and a
//restart button
function endGame(winner) {
  const popup = document.getElementById('popup_background');
  const popupText = document.getElementById('popup_text');
  const popupButton = document.getElementById('popup_button');

  if (winner == 'Player') {
    popupText.textContent = 'Congratulations, you won the game!';
  } else {
    popupText.textContent = 'Too bad, you lost the game!';
  }

  popupButton.onclick = () => window.location.reload();
  popup.classList.add('show');
}
