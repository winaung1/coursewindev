// Guessing Game 1 - 100

console.log("Welcome to the Magic Number Guessing Game!")

function playGame(){
    // generate a number 

    const magicNumber = Math.floor(Math.random() * 100) + 1

    let attempts = 0

    console.log("I've picked a magic number between 1 and 100. Can you guess it?")

    while (true){
        const userInput = prompt("Enter your guess:")
        const guess = parseInt(userInput, 10)

        if(isNaN(guess)){
            console.log("Not a valid number!")
            continue;
        }

        attempts++

        // check guess 

        if(guess > magicNumber){
            console.log('Too high!')
        } else if(guess < magicNumber){
            console.log('Too low!')

        } else {
            console.log("Congrats! you did it!")
            break;
        }
    }


    // play again? 
    const playAgain = prompt("Do you want to play again? (yes/no): ").toLowerCase()

    if(playAgain === 'yes'){
        playGame()
    } else {
        console.log('Thanks for playing! Goodbye!')
    }
}

playGame()