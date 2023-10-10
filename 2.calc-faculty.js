import readline from "read-console-input"
let total = 0;

function doThing() {
    let number = readline("give me a number, any nymber :winkyface: ")

    for ( let i = 1; i < number - 1; i++) {
        let current = number * (number - i)
        total = total + current;

    }

    console.log(total)
}

doThing()