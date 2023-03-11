// Get an input from a player ( Scissors rock  paper)
// Store that input into playerChoice 
// get a random number from 0-2
// depending on that number assign Scissors ,rock or paper to computerChoice
// compare there values and decide a winner
// print a  winner and add +1 to winner score
// do everything above 5 times

let scissors = "Scissors";
let rock = "Rock";
let paper = "Paper";
playerChoice = "";
computerChoice = "";
player_score = 0 ;
computer_score = 0 ;



function getPlayerChoice(choice) {
    choice = prompt("Choose your stance:");
    choice = choice.toLowerCase();
    if (choice == "rock") {
        return playerChoice = rock;
    }
    else if (choice == "paper") {
        return playerChoice = paper;
    }
    else {
        return playerChoice = scissors;
    }


}


function getComputerChoice(random) {
    random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return computerChoice = paper;
    }
    else if (random == 1) {
        return computerChoice = rock;
    }
    else {
        return computerChoice = scissors;
    }
}

function playRound (player,computer) {
    getComputerChoice();
    getPlayerChoice();
    console.log(computerChoice);
    console.log(playerChoice);
    if (playerChoice == computerChoice) {
        console.log("It`s a tie!");
    }
    else if (playerChoice == rock && computerChoice == scissors) {
        console.log(`You won! ${playerChoice} beats ${computerChoice}`);
        return player_score++
    }
    else if (playerChoice == paper && computerChoice == rock) {
        console.log(`You won! ${playerChoice} beats ${computerChoice}`);
        return player_score++
    }
    else if (playerChoice == scissors && computerChoice == paper) {
        console.log(`You won! ${playerChoice } beats ${computerChoice}`);
        return player_score++
    }
    else {
        console.log("You lost!")
        return computer_score++;
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
     }
     if (player_score > computer_score) {
        console.log("You've  won the game!");
     }
     else if (player_score < computer_score) {
        console.log("You've lost the game");
     }
     else  {
        console.log ("It's a tie!");
     }
}



game();