console.log("Hello World!"); 
//console.log(getComputerChoice());
let computerChoice = 0;
let humanChoice = 0;
let result = true;
let cont = true;
let win = 0;
let answer = "";
let humanScore = 0;
let computerScore = 0;

let buttonPress = "";

//Title Creation:
const title = document.createElement('h1');
title.className = 'title-rps';
title.textContent = "Rock Paper Scissors";

const contentTitle = document.createElement('h2');
contentTitle.className = 'title-content';
contentTitle.textContent = "Make Your Pick!";

//Container creation:
const parentDiv = document.createElement('div');
parentDiv.className = 'div-container';

const childDiv = document.createElement('div');
childDiv.className = 'div1-container';

const contentDiv2 = document.createElement('div');
contentDiv2.className = 'div2-container';

//Button Creations:
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.className = "buttons";
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
rockButton.className = "buttons";
const scissorButton = document.createElement('button');
scissorButton.textContent = 'Scissors';
rockButton.className = "buttons";

//Text Output Boxes:
const roundResultBox = document.createElement('input');
roundResultBox.type = 'text';
roundResultBox.readOnly = true;
roundResultBox.id = "resultBox1";
roundResultBox.placeholder = 'Click a Button...';

const finalResultBox = document.createElement('input');
finalResultBox.type = 'text';
finalResultBox.readOnly = true;
finalResultBox.id = "resultBox2";
finalResultBox.placeholder = 'Wait till 5 Rounds are played...';

//HTML DOM Append:
parentDiv.appendChild(contentTitle);
childDiv.appendChild(rockButton);
childDiv.appendChild(paperButton);
childDiv.appendChild(scissorButton);


parentDiv.appendChild(childDiv);

contentDiv2.appendChild(roundResultBox);
contentDiv2.appendChild(finalResultBox);

document.body.appendChild(title);
document.body.appendChild(parentDiv);
document.body.appendChild(contentDiv2);





//Button Functions:
function rockButtonPress(event){
    console.log("rock!");
    //roundResultBox.value = "ROCK";
    getHumanChoice(event); 
}

function paperButtonPress(event){
    console.log("paper!");
    //roundResultBox.value = "PAPER";
    getHumanChoice(event); 
}

function scissorButtonPress(event){
    console.log("scissors!");
    //roundResultBox.value = "SCISSORS";
    getHumanChoice(event); 
}

//EventListener for Rock Paper Scissors:
rockButton.addEventListener('click',rockButtonPress);
paperButton.addEventListener('click',paperButtonPress);
scissorButton.addEventListener('click',scissorButtonPress);

function getHumanChoice(event){
    // Check if game is already over
  if (humanScore >= 5 || computerScore >= 5) {
      return; 
  }

  const playerChoice = event.target.textContent.trim().toLowerCase();;
  //Log Human Choice
  console.log(`Player chose: ${playerChoice}`);
  // Update your input field using .value
    if (playerChoice === 'rock') {
        humanChoice = 'rock';
    } else if (playerChoice === 'paper') {
        humanChoice = 'paper';
    } else if (playerChoice === 'scissors') {
        humanChoice = 'scissors';
    }

    computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);


}

function getComputerChoice(){
    var choice=['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(humanChoice,computerChoice){
    console.log(`Computer chose: ${computerChoice}`);
    let humanWin = false;
     // 1. Check for a Tie first
    if (humanChoice === computerChoice) {
        roundResultBox.value = `Tie! Both picked ${humanChoice.toUpperCase()}`;
    } 
    else if(humanChoice === 'rock'){
        if(computerChoice !== 'paper'){
            humanWin = true;
            humanScore++;
            roundResultBox.value = "Human Wins";
        }
        else{
            computerScore++;
            roundResultBox.value = "Computer Wins";
        }
    }
    else if(humanChoice === 'paper'){
        if(computerChoice !== 'scissors'){
            humanWin = true;
            humanScore++;
            roundResultBox.value = "Human Wins";
        }
        else{
            computerScore++;
            roundResultBox.value = "Computer Wins";
        }
    }
    else{
    //Scissors
        if(computerChoice !== 'rock'){
            humanWin = true;
            humanScore++;
            roundResultBox.value = "Human Wins";
        }
        else{
            computerScore++;
            roundResultBox.value = "Computer Wins";
        }
    }
     //Update the final scoreboard box
     finalResultBox.value = `Score - Human: ${humanScore} | Computer: ${computerScore}`;
     //Check if anyone hit 5 points
    checkGameWinner();
}

function checkGameWinner() {
    if (humanScore === 5) {
        finalResultBox.value = "HUMAN WINS THE GAME!";
        disableButtons();
    } else if (computerScore === 5) {
        finalResultBox.value = "COMPUTER WINS THE GAME!";
        disableButtons();
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;

}

//getHumanChoice();

//Wrap with while statement with question at end to ask user if they want to play again...
for(let i = 0; i < 5; i++){
    /*computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    result = playRound(humanChoice,computerChoice,0);
    if(result == true){
        humanScore++;
        console.log(`Human wins. Win: ${humanScore}`);
    }
    else{
        computerScore++;
        console.log(`Computer wins. Win: ${computerScore}`);
    }
 }
 if (humanScore > computerScore){
    console.log(`Human Wins with ${humanScore} wins!`);
    humanScore=0;

 }
 else{
    console.log('Computer Wins with ${computerScore} wins!');
    computerScore=0;
    */
 }








