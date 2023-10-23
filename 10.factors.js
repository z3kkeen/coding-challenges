import readline from "read-console-input";

let factors = [];
let backwardsFactors = [];

function factorChecker() {
    let userInput = Number(readline("give me a number: "));

    for(let i = 0; i < userInput; i++) {
        if(userInput / i === parseInt(userInput / i)) {

            factors.push(i + " ")
        };
    };
    console.log("factors: " + factors);
    
    backwardsFactors.push(userInput)

    for(let i = 0; i < factors.length; i++) {

        let backwardsCurrent = factors.length - i - 1;
        backwardsFactors.push(factors[backwardsCurrent])

        console.log(factors[i] + " x " + backwardsFactors[i] + " = " + (factors[i] * backwardsFactors[i]));
    };
};

factorChecker();