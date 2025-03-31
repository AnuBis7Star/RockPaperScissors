let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = 0; // 0 = rock, 1 = paper, 2 = scissors
    let randomchoice = Math.random();
    
    if (randomchoice <= 0.33) { // Rock
        return 0;
    } else if (randomchoice > 0.33 && randomchoice <= 0.66) { // Paper
        return 1;
    } else { // Scissors
        return 2;
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        document.querySelector("#results").textContent = "It's a draw! No points.";
    } else if (humanChoice == 0 && computerChoice == 1) {
        document.querySelector("#results").textContent = "Rocks loses against paper, you lose! +1 Computer";
        computerScore += 1;
    } else if (humanChoice == 0 && computerChoice == 2) {
        document.querySelector("#results").textContent = "Rock wins against scissors, you win! +1 Player";
        humanScore += 1;
    } else if (humanChoice == 1 && computerChoice == 0) {
        document.querySelector("#results").textContent = "Paper wins against rock, you win! +1 Player";
        humanScore += 1;
    } else if (humanChoice == 1 && computerChoice == 2){
        document.querySelector("#results").textContent = "Paper loses against scissors, you lose! +1 Computer";
        computerScore += 1;
    } else if (humanChoice == 2 && computerChoice == 0) {
        document.querySelector("#results").textContent = "Scissors loses against rock, you lose! +1 Computer";
        computerScore += 1;
    } else if (humanChoice == 2 && computerChoice == 1) {
        document.querySelector("#results").textContent = "Scissors wins against paper, you win! +1 Player";
        humanScore += 1; 
    } else {
        document.querySelector("#results").textContent = "Invalid!";
    }
    document.querySelector("#score").textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore == 5) {
        document.querySelector("#results").textContent = "Winner is PLAYER!";
        
    } else if (computerScore == 5) {
        document.querySelector("#results").textContent = "Winner is COMPUTER!";
    }
}
const rock = document.querySelector("#rock");
rock.onclick = () => playRound(0,getComputerChoice());

const paper = document.querySelector("#paper");
paper.onclick = () => playRound(0,getComputerChoice());

const scissors = document.querySelector("#scissors");
scissors.onclick = () => playRound(0,getComputerChoice());

const results = document.querySelector("#results");