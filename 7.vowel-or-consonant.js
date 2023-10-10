import readline from "read-console-input"

let vowelCounter = 0;
let consCounter = 0;

function counting() {
    let userInput = readline("write something: ");

    for( let i = 0; i < userInput.length; i++) {
        let current = userInput[i];

        if (
            current == "a" || current == "e" || current == "i" || 
            current == "o" || current == "u" || current == "y" || 
            current == "å" || current == "ä" || current == "ö" 
            ){
                vowelCounter++;

        } else if(
            current == "b" || current == "c" || current == "d" || 
            current == "f" || current == "g" || current == "h" || 
            current == "j" || current == "k" || current == "l" || 
            current == "m" || current == "n" || current == "p" || 
            current == "q" || current == "r" || current == "s" || 
            current == "t" || current == "v" || current == "z" || 
            current == "x"
            ){
                consCounter++;
        }
    }

    console.log("there were " + vowelCounter + " vowles, and " + consCounter + " consonants in that statement.");
}

counting()