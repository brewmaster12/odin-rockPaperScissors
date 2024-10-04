
let humanScore = 0;
let computerScore = 0;
let roundResult;

const container = document.querySelector("#container");

const scoreBoard = document.createElement("div");
scoreBoard.textContent = `Human: ${humanScore} Computer: ${computerScore}`
container.appendChild(scoreBoard);

const winAnnounce = document.createElement("div");
winAnnounce.textContent = "YOU WIN!\n\nRefresh the page the play again";

const loseAnnounce = document.createElement("div");
loseAnnounce.textContent = "YOU LOSE!\n\nRefresh the page the play again";


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
    
    if (roundResult == "win") {
        humanScore++;
    } else if (roundResult == "lose") {
        computerScore++;
    }

    const roundAnnounce = document.createElement("div");
    roundAnnounce.textContent = `You chose ${x}\nComputer chose ${y}\nYou ${roundResult}`;
    container.appendChild(roundAnnounce);

    scoreBoard.textContent = `Human: ${humanScore} Computer: ${computerScore}`

    if (humanScore === 5) {
        container.appendChild(winAnnounce);

    } else if (computerScore === 5) {
        container.appendChild(loseAnnounce);
    }
}

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})
