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

//Wrap with while statement with question at end to ask user if they want to play again...
for(let i = 0; i < 5; i++){
    computerChoice = getComputerChoice();
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
 }





function getHumanChoice(){
    const valid = ['rock', 'paper', 'scissors'];
  let input = '';
  while (!valid.includes(input)) {
    input = prompt('Rock, paper, or scissors?').toLowerCase().trim();
  }
  return input;
}
function getComputerChoice(){
    var choice=['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(humanChoice,computerChoice,rounds){
    var humanWin = false;
    var computerScore = 0;
    if(humanChoice === 'rock'){
        if(computerChoice !== 'paper'){
            humanWin = true;
            console.log('Human Won!');
        }
        else{
            computerScore++;
        }
    }
    else if(humanChoice === 'paper'){
        if(computerChoice !== 'scissors'){
            humanWin = true;
            console.log('Human Won!');
        }
        else{
            computerScore++;
        }
    }
    else{
    //Scissors
        if(computerChoice !== 'rock'){
            humanWin = true;
            console.log('Human Won!');
        }
        else{
            computerScore++;
        }
    }
    return humanWin;
}