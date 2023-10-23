// - gen random number 1-100
// - compare user input to randomIndex
//   ---> if input > index { log('number is lower than' + userInput)}
//        else { log('number is lower than' + userInput)}

import readline from "read-console-input"

let unknown = true;

function secretNumber() {
    const secretNumber = Math.floor(Math.random() * (100 - 1) + 1) ;

    while(unknown) {
        let userInput = Number(readline("guess the secret number: "));

        if(secretNumber == userInput) {
            unknown = false
            console.log('good job! you guessed the secret number !! ^^');
            console.log('the secret number was indeed ' + secretNumber);
        }

        if(userInput > secretNumber) {
            console.log('number is lower than ' + userInput);
        } else if (userInput < secretNumber) {
            console.log('number is higher than ' + userInput);
        }
    }
}

secretNumber()