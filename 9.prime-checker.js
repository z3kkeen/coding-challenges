import readline from "read-console-input";


function primeChecker() {
    let userInput = JSON.parse(readline("enter a number for prime-number check: "));

    if(userInput / 2 === parseInt(userInput / 2)) {
        console.log(userInput + " is not a prime number.");
    } else {
        console.log(userInput + " is a prime number.");
    };

};

primeChecker();