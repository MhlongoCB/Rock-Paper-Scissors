
let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * 3);
    return choices[num]; 
}

function play(playerSelection, computerSelection){
    if(playerSelection == computerSelection){return "tie";}
    else if((playerSelection == "paper" && computerSelection == "rock")){
        playerScore += 1;
        return "You win! Paper beats Rock";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        return "You win! Rock beats Scissors";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        return "You win! Scissors beats Paper";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        return "You lose! Scissors beat paper";
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore += 1;
        return "You lose! Paper beats Rock";
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore += 1;
        return "You lose! Rock beats scissors";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        const playerChoice = prompt("Enter your choice").toLocaleLowerCase();
        console.log(play(playerChoice, getComputerChoice()));
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }
}

game();