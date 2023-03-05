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
const lose = document.querySelector('#lose');
const announcement = document.querySelector('#announcement');

let winCount = 0;
let loseCount = 0;
div.innerHTML = `Please select rock, papers or scissors`
win.innerHTML = `Wins: ${winCount}`;
lose.innerHTML = `Loses: ${loseCount}`;
announcement.innerHTML = `Win 5 rounds to defeat the super computer!`

// add 'click' event listener to each buttons
rock.addEventListener('click', () => {
    let randomGenerated = getComputerChoice();
    let message = playGame('rock', randomGenerated);
    div.innerHTML = message;
    game(message);
});
paper.addEventListener('click', () => {
    let randomGenerated = getComputerChoice();
    let message = playGame('paper', randomGenerated);
    div.innerHTML = message;
    game(message);
});
scissors.addEventListener('click', () => {
    let randomGenerated = getComputerChoice();
    let message = playGame('scissors', randomGenerated);
    div.innerHTML = message;
    game(message);
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
            win.innerHTML = `Wins: ${winCount}`;
        }   else if (message.includes("You lose")){
            loseCount += 1;
            lose.innerHTML = `Loses: ${loseCount}`;
        }
        if (winCount === 5){
            announcement.innerHTML = `Congratulations! You have won against the supercomputer!`
            alert ("Congratulations! You win!");
            rock.disabled = true; paper.disabled = true; scissors.disabled = true;
        }   else if (loseCount === 5){
            announcement.innerHTML = `Defeated! You have lost against the super computer!`
            alert ("Better luck next time! You lost!")
            rock.disabled = true; paper.disabled = true; scissors.disabled = true;
        }
    };