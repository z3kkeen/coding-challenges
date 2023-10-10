import readline from "read-console-input";

let forwards = [];
let backwards = [];


function palindromeChecker() {
    let userInput = readline("input word to check if it's a palindrome: ");
    let palindrome = true;

    for(let i = 0; i < userInput.length; i++) {

        let current = i;
        let backwardsCurrent = userInput.length - current - 1;

        forwards.push(userInput[current])
    
        console.log("forwards");
        console.log(forwards);

        backwards.push(userInput[backwardsCurrent])

        console.log("backwards");
        console.log(backwards);

        if (userInput[i] == !userInput[backwardsCurrent]) {
            palindrome = false;
        }
    }

    if (palindrome == true) {
        console.log("yes, " + '"' + userInput + '"' + " is  a palindrome.");
    } else if (palindrome == false) {
        console.log('"' + userInput + '"' + " is not a palindrome.");
    }
}

palindromeChecker()