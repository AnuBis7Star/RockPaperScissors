
function getComputerChoice() {
    let choice = 0; // 0 = rock, 1 = paper, 2 = scissors
    let randomchoice = Math.random();
    
    if (randomchoice <= 0.33) {
        choice = 0; // Rock
        return "Rock";
    } else if (randomchoice > 0.33 && randomchoice <= 0.66) {
        choice = 1; // Paper
        return "Paper";
    } else {
        choice = 2; // Scissors
        return "Scissors";
    }
}

console.log(getComputerChoice());