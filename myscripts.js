let paper = "Paper";
let rock = "Rock";
let scissors = "Scissors";\
let player_score = 0;
let computer_score = 0;

function getComputerChoice(computerSelection) {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        computerSelection = paper
        return computerSelection
    }
    else if(random == 1) {
        computerSelection = rock
        return computerSelection;
    }
    else {
        computerSelection = scissors
        return computerSelection;
    }
    
    
}


function getPlayerChoice(playerSelection) {
    choice = prompt("What do you choose?");
    choice = choice.toLowerCase();
    if (choice == "paper") {
        playerSelection = paper;
        return playerSelection ;
    }
    else if(choice == "rock") {
        playerSelection = rock;
        return playerSelection ;
    }
    else if (choice == "scissors") {
        playerSelection = scissors;
        return playerSelection ;
    }
    
}


let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return tie;
    }
    else if (playerSelection == rock && computerSelection == scissors) {
        return win;
    }
    else if (playerSelection == scissors && computerSelection == paper) {
        return win;
    }
   
    
    else if(playerSelection == paper && computerSelection == rock) {
        return win;
    }
    else {
        return lose;
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);


}
 
}
const win = `You won! ${playerSelection} beats ${computerSelection}`;
const lose = `You lost! ${computerSelection} beats ${playerSelection}`;
const tie = "It's a tie!";
console.log(playRound(playerSelection, computerSelection));
