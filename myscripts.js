let paper = "Paper";
let rock = "Rock";
let scissors = "Scissors";




function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return computerChoice = paper
    }
    else if(choice === 1) {
        return computerChoice = rock
    }
    else {
        return computerChoice = scissors
    }
    
    
}


function getPlayerChoice(playerChoice) {
    choice = prompt("What do you choose?");
    choice = choice.toLowerCase();
    if (choice == "paper") {
        return playerChoice = paper;
    }
    else if(choice == "rock") {
        return playerChoice = rock;
    }
    else if (choice == "scissors") {
        return playerChoice = scissors;
    }
    
}

function game(playerSelection, computerChoice) {

    


}
 
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

