import readline from "read-console-input"

let num1 = 0;
let num2 = 1;
let total = 0;

function doThing() {
    let number = readline("how many Fibonacci-tal do you want ? ")
    
    for ( let i = 0; i < number; i++) {
        
        console.log(total)

        total = num1 + num2;
        num2 = num1;
        num1 = total;
    };
};

doThing();