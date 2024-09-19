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

    if (humanChoice === "rock" || "paper" || "scissors") {
        return humanChoice;
    } else {
        return "Invalid. Pleaser enter rock, paper or scissors";
    }


}

console.log(getHumanChoice())