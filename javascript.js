
let humanScore = 0;
let computerScore = 0;

function playGame() {

    function getHumanChoice() {
        let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

        if (humanChoice === "rock") {
            return humanChoice;
        } else if (humanChoice === "paper") {
            return humanChoice;    
        } else if (humanChoice === "scissors") {
            return humanChoice;
        } else { return "invalid" }
    }

    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random() * 3)

        if (computerChoice === 0) {
            return "rock"
        } else if (computerChoice === 1) {
            return "paper"
        } else if (computerChoice === 2) {
            return "scissors"
        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let roundResult;

    function playRound(x, y) {

        if (x === y) {
             roundResult = "draw"
        } else if (x === "rock" && y === "paper") {
             roundResult = "lose"
        } else if (x === "rock" && y === "scissors") {
             roundResult = "win"
        } else if (x === "paper" && y === "scissors") {
             roundResult = "lose"
        } else if (x === "paper" && y === "rock") {
             roundResult = "win"
        } else if (x === "scissors" && y === "rock") {
             roundResult = "lose"
        } else if (x === "scissors" && y === "paper") {
             roundResult = "win"
        }

        
        if (roundResult === "win") {
            humanScore++;
        } else if (roundResult === "lose") {
            computerScore++;
        }

        console.log(`You chose ${humanSelection}\nComputer chose ${computerSelection}\nYou ${roundResult}`)
    }

    playRound(humanSelection, computerSelection);

    console.log(`Human: ${humanScore} Computer: ${computerScore}`)

    while (humanScore < 5 && computerScore < 5) {
        playGame();
    }
}

playGame();

if (humanScore === 5) {
    console.log("YOU WIN!\n\nRefresh the page the play again");
} else if (computerScore === 5) {
    console.log("YOU LOSE!\n\nRefresh the page the play again");
}