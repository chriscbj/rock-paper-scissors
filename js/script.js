// Get AI to randomly return either 'rock, paper, scissors' and store in a variable - getComputerChoice()
// Get player to input either 'rock, paper, scissors' and store in variable - playerSelection

// What input?
// What output?

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
    playerInput = prompt ('Rock, paper or scissors?');
    return playerInput.toLowerCase();
}

function playGame(playerInput, randomGenerated) {
    if (playerInput.toLowerCase() == 'rock' && randomGenerated == 'Paper'){
        console.log ("You lose!");
    }
    else if (playerInput.toLowerCase() == 'paper' && randomGenerated == 'Scissors'){
        console.log ("You lose!");
    }
    else if (playerInput.toLowerCase() == 'scissors' && randomGenerated == 'Rock'){
        console.log ("You lose!");
    }
    else if (playerInput.toLowerCase() == 'rock' && randomGenerated == 'Scissors'){
        console.log ("You win!");
    }
    else if (playerInput.toLowerCase() == 'paper' && randomGenerated == 'Rock'){
        console.log ("You win!");
    }
    else if (playerInput.toLowerCase() == 'scissors' && randomGenerated == 'Paper'){
        console.log ("You win!");
    }
    else if (playerInput.toLowerCase() == 'rock' && randomGenerated== 'Rock'){
        console.log ("It's a tie!");
    }
    else if (playerInput.toLowerCase() == 'paper' && randomGenerated == 'Paper'){
        console.log ("It's a tie!");
    }
    else if (playerInput.toLowerCase() == 'scissors' && randomGenerated == 'Scissors'){
        console.log ("It's a tie!");
    }
}

let result;
getComputerChoice();
console.log (randomGenerated);
playerSelection();
playGame(playerInput, randomGenerated);