function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if ((humanChoice === 'paper') && (computerChoice === 'rock')) {
            humanScore++;
            console.log(`You win! Your score: ${humanScore}, Computer score: ${computerScore}`);
        } else if ((humanChoice === 'rock') && (computerChoice === 'scissors')) {
            humanScore++;
            console.log(`You win! Your score: ${humanScore}, Computer score: ${computerScore}`);
        } else if ((humanChoice === 'scissors') && (computerChoice === 'paper')) {
            humanScore++;
            console.log(`You win! Your score: ${humanScore}, Computer score: ${computerScore}`);
        } else if ((computerChoice === 'paper') && (humanChoice === 'rock')) {
            computerScore++;
            console.log(`You lose! Your score: ${humanScore}, Computer score: ${computerScore}`);
        } else if ((computerChoice === 'rock') && (humanChoice === 'scissors')) {
            computerScore++;
            console.log(`You lose! Your score: ${humanScore}, Computer score: ${computerScore}`);
        } else if ((computerChoice === 'scissors') && (humanChoice === 'paper')) {
            computerScore++;
            console.log(`You lose! Your score: ${humanScore}, Computer score: ${computerScore}`);
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    let result = "";
    (random === 1)
        ? result = "rock"
        : (random === 2)
            ? result = "paper"
            : result = "scissors"
    console.log(result);
    return result;
}

function getHumanChoice() {
    const result = prompt('What is your choice?').toLowerCase();
    console.log(result);
    return result;
}

playGame();