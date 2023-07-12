"use strict";

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

const playerRunningScore = document.getElementById('playerRunningScore');
const computerRunningScore = document.getElementById('computerRunningScore');
const winner = document.getElementById('winner');

let pCounter1 = 0;
let pCounter2 = 0;

function playRound(playerSelection, computerSelection)  {
        if (playerSelection === computerSelection) {
            return "Tie";
        } else if (
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")
        ) {
            pCounter1++;
            playerRunningScore.textContent = pCounter1;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            pCounter2++;
            computerRunningScore.textContent = pCounter2;
            return `You lose! ${computerSelection} beats ${playerSelection}. Don't give up!`;
        }
    }

let computerSel = getComputerChoice(); 
const showResult = document.getElementById('results');  

//Buttons
const rock = document.getElementById('button1');
rock.addEventListener('click', () => {
    showResult.textContent = playRound("Rock", computerSel);
    checkWinner();
    });

const paper = document.getElementById('button2');
paper.addEventListener('click', () => {
    showResult.textContent = playRound("Paper", computerSel);
    checkWinner();
    });

const scissors = document.getElementById('button3');
scissors.addEventListener('click', () => {
    showResult.textContent = playRound("Scissors", computerSel);
    checkWinner();
    });

function checkWinner() {
    if (pCounter1 === 5) {
        winner.textContent = "You win! Congrats";
        gameReset();
    } else if (pCounter2 === 5) {
        winner.textContent = "Computer wins!";
        gameReset();
    }
}
function gameReset() {
    pCounter1 = 0;
    pCounter2 = 0;
    playerRunningScore.textContent = pCounter1;
    computerRunningScore.textContent = pCounter2;
}


