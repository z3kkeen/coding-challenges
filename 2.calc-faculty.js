import readline from "read-console-input"

function doThing() {
    let number = Number(readline("give me a number, any nymber :winkyface: "))
    let total = number * (number - 1);

    for(let i = 2; i < number; i++) {
        total = total * (number - i);
    }

    console.log(total);
}

doThing()