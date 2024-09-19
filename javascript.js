function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
}


function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper or scissors")

    if (humanChoice === "rock") {
        return `You chose ${humanChoice}`;
    } else if (humanChoice === "paper") {
        return `You chose ${humanChoice}`;
    } else if (humanChoice === "scissors") {
        return `You chose ${humanChoice}`;
    } else {
        return "Invalid. Pleaser enter rock, paper or scissors";
    }
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;