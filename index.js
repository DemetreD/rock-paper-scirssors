function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        return "Rock";
    }else if (randNum === 1) {
        return "Paper";
    }else {
        return "Scissors";
    }
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  
    // let winner = 0;

    if (playerSelection === computerSelection) {
            return "Tie"
            // winner = winner;
    }else if ((playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Rock" && computerSelection === "Scissors")){
            return `You win! ${playerSelection} beats ${computerSelection}`;
            // winner += 1;
    }else if ((computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Scissors" && playerSelection === "Paper") || (computerSelection === "Rock" && playerSelection === "Scissors")) {
            return `You lose! ${computerSelection} beats ${playerSelection}. Don't give up!`;
            // winner += 1;
        }          
    
    // if (winner === playerSelection) {
    //     return "You won!";
    // }else {
    //     return "You lost";
    // }
 
    // I HAVE TO MAKE WINNER SYSTEM
    
}

function game() {
    let rounds = 5;
    for (let index = 0; index < rounds; index++) {
        let playerSelection = prompt("Rock, Paper, Scissors");

       console.log(playRound(playerSelection, computerSel));
    }
}

// let playerSelection = prompt("Rock, Paper, Scissors");
let computerSel = getComputerChoice();
game();
// console.log(playRound(playerSelection, computerSel));
// console.log(getComputerChoice());