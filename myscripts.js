let paper = "Paper";
let rock = "Rock";
let scissors = "Scissors";



function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        console.log(paper);
    }
    else if(choice === 1) {
        console.log(rock);
    }
    else {
        console.log(scissors);
    }
    return choice;

}



getComputerChoice();