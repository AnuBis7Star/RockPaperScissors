function getComputerChoice() {
    let choice = 0; // 0 = rock, 1 = paper, 2 = scissors
    let randomchoice = Math.random();
    
    if (randomchoice <= 0.33) {
        choice = 0; // Rock
        return choice;
    } else if (randomchoice > 0.33 && randomchoice <= 0.66) {
        choice = 1; // Paper
        return choice;
    } else {
        choice = 2; // Scissors
        return choice;
    }
}

function getHumanChoice () {
    let choice = prompt("Enter your choice (0 Rock, 1 Paper, 2 Scissors):");
    if (choice == 0) {
        return choice; // Rock
    } else if (choice == 1) {
        return choice; // Paper
    } else if (choice == 2) {
        return choice; // Scissors
    } else {
        return "invalid";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a draw! No points.");
        } else if (humanChoice == 0 && computerChoice == 1) {
            console.log("Rocks loses against paper, you lose! +1 Computer");
            computerScore += 1;
        } else if (humanChoice == 0 && computerChoice == 2) {
            console.log("Rock wins against scissors, you win! +1 Player");
            humanScore += 1;
        } else if (humanChoice == 1 && computerChoice == 0) {
            console.log("Paper wins against rock, you win! +1 Player");
            humanScore += 1;
        } else if (humanChoice == 1 && computerChoice == 2){
            console.log("Paper loses against scissors, you lose! +1 Computer");
            computerScore += 1;
        } else if (humanChoice == 2 && computerChoice == 0) {
            console.log("Scissors loses against rock, you lose! +1 Computer");
            computerScore += 1;
        } else if (humanChoice == 2 && computerChoice == 1) {
            console.log("Scissors wins against paper, you win! +1 Player");
            humanScore += 1;
        } else {
            console.log("Invlaid.");
        }
        console.log(`Player: ${humanScore}, Computer: ${computerScore}`);
    }
    for (let index = 0; index < 5; index++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("Winner is PLAYER!");
    } else if (humanScore < computerScore) {
        console.log("Winner is COMPUTER!");
    } else {
        console.log("It's a DRAW!");
    }
}

playGame();