// Get AI to randomly return either 'rock, paper, scissors' and store in a variable - getComputerChoice()
// Get player to input either 'rock, paper, scissors' and store in variable - playerSelection()

// What input?
// What output?

// select buttons and win counter
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const div = document.querySelector('#message');
const win = document.querySelector('#win');
let winCount = 0;

// add 'click' event listener to each buttons
rock.addEventListener('click', () => {
    let randomGenerated = getComputerChoice();
    let message = playGame('rock', randomGenerated);
    div.innerHTML = message;
    game(message, winCount);
});
paper.addEventListener('click', () => {
    let randomGenerated = getComputerChoice();
    let message = playGame('paper', randomGenerated);
    div.innerHTML = message;
});
scissors.addEventListener('click', () => {
    let randomGenerated = getComputerChoice();
    let message = playGame('scissors', randomGenerated);
    div.innerHTML = message;
});

function getComputerChoice() {
    // create an array
    // print a random item from the array
    choice = ['Rock','Paper','Scissors'];
    randomIndex = Math.floor(Math.random() * choice.length);
    randomGenerated = choice[randomIndex];
    return randomGenerated;
}

function playerSelection() {
    // Get player to input 'rock, paper, or scissors (case-insensitive)
    // Use if to compare and decide whether win or lose
    playerSelection = prompt ('Rock, paper or scissors?');
}

function playGame(playerInput, randomGenerated) {
    if (playerInput.toLowerCase() == 'rock' && randomGenerated == 'Paper'){
        return ("You lose! Paper beats Rock!");

    }
    else if (playerInput.toLowerCase() == 'paper' && randomGenerated == 'Scissors'){
        return ("You lose! Scissors beats Paper!");
    }
    else if (playerInput.toLowerCase() == 'scissors' && randomGenerated == 'Rock'){
        return ("You lose! Rock beats Scissors!");
    }
    else if (playerInput.toLowerCase() == 'rock' && randomGenerated == 'Scissors'){
        return ("You win! Rock beats Scissors!");
    }
    else if (playerInput.toLowerCase() == 'paper' && randomGenerated == 'Rock'){
        return ("You win! Paper beats Rock!");
    }
    else if (playerInput.toLowerCase() == 'scissors' && randomGenerated == 'Paper'){
        return ("You win! Scissors beats Paper!");
    }
    else if (playerInput.toLowerCase() == 'rock' && randomGenerated== 'Rock'){
        return ("It's a tie!");
    }
    else if (playerInput.toLowerCase() == 'paper' && randomGenerated == 'Paper'){
        return ("It's a tie!");
    }
    else if (playerInput.toLowerCase() == 'scissors' && randomGenerated == 'Scissors'){
         return ("It's a tie!");
    }
};


    function game(message) {
        if (message.includes("You win")){
            winCount += 1;
            win.innerHTML = winCount;
         }
    }

/* function game() {
    for (let i = 0; i < 5; i++){
        randomGenerated = getComputerChoice();
        console.log (randomGenerated);
        playerInput = prompt('Rock, papers, or scissors?');
        result = playGame(playerInput,randomGenerated);
        console.log (result);
        if (result.includes("You lose")){
            loseCount += 1;
         } else if (result.includes("You win")){
            winCount += 1;
         }
        }
    }; */

/* 
    function count(){
        if (winCount < loseCount){
            console.log ("You are the loser! The computer wins!");
         } else if (winCount > loseCount){
            console.log ("You are the winner! The computer loses!");
         }
        };

let playerInput;
let randomGenerated;
let loseCount = 0;
let winCount = 0;
game();
count(); */