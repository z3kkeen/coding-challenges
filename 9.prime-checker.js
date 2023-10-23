import readline from "read-console-input";

let numberIsPrime;

function primeChecker() {
    let userInput = Number(readline("enter a number for prime-number check: "));

    for(let i = 1; i < userInput - 1; i++) {
        if(userInput % i == 0) {
            numberIsPrime = false;
            console.log(userInput + " is not a prime number.");
            return;
        } else {
            numberIsPrime = true;
        };
    };

    console.log(userInput + " is a prime number.");
};

primeChecker();