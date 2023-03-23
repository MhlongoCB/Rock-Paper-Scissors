
let computerscore = 0;
let playerscore = 0;

const rock = document.querySelector("#rock");
rock.addEventListener("click", () =>{
    if(playerscore < 5 && computerscore < 5){
        playRound("rock", getComputerChoice());
    }
})

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    if(playerscore < 5 && computerscore < 5){
        playRound("paper", getComputerChoice());
    }
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    if(playerscore < 5 && computerscore < 5){
    playRound("scissors", getComputerChoice());
    }
})

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * 3);
    return choices[num]; 
}

function playRound(playerSelection, computerSelection){
    const description = document.querySelector("#description");
    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerScore");

    if(playerSelection == computerSelection){
        description.textContent = `Tie! ${playerSelection} ties with ${computerSelection}`;
    }
    else if((playerSelection == "paper" && computerSelection == "rock")){
        playerscore += 1;
        playerScore.textContent = playerscore;
        description.textContent = "You win! Paper beats Rock";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerscore += 1;
        playerScore.textContent = playerscore;
        description.textContent = "You win! Rock beats Scissors";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerscore += 1;
        playerScore.textContent = playerscore;
        description.textContent = "You win! Scissors beats Paper";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerscore += 1;
        computerScore.textContent = computerscore;
        description.textContent = "You lose! Scissors beat paper";
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        computerscore += 1;
        computerScore.textContent = computerscore;
        description.textContent = "You lose! Paper beats Rock";
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerscore += 1;
        computerScore.textContent = computerscore;
        description.textContent = "You lose! Rock beats scissors";
    }

    if(playerscore == 5 || computerscore == 5){outcome();}
}

function outcome(){
    const result = document.createElement("div");
    const outcomeStatement = document.createElement("h2");
    const playAgain = document.createElement("button");

    if(playerscore == 5){
        outcomeStatement.textContent = "YOU WON!";
        result.appendChild(outcomeStatement);
    }
    else if(computerscore == 5){
        outcomeStatement.textContent = "YOU LOST!";
        result.appendChild(outcomeStatement);
    }

    playAgain.textContent = "Play Again";
    result.appendChild(playAgain);
    const container = document.querySelector("#container");
    container.appendChild(result);

    playAgain.addEventListener("click", () => {
        computerscore = 0;
        playerscore = 0;
        playerScore.textContent = playerscore;
        computerScore.textContent = computerscore;
        description.textContent = "First to 5 points wins! PLAY!!!";
        container.removeChild(result);
    })
}
