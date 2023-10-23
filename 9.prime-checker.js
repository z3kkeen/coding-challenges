import readline from "read-console-input";

function primeChecker() {
    let userInput = Number(readline("enter a number for prime-number check: "));

    for(let i = 2; i < userInput; i++) {
        if(userInput % i == 0) {
            console.log(userInput + " is not a prime number.");
            return;
        };
    };

    console.log(userInput + " is a prime number.");
};

primeChecker();