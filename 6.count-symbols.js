// depending on how many characters is in the string, for(will loop)
// if [i] == string or int, string or int counter will increase
import readline from "read-console-input"

let intCounter = 0;
let stringCounter = 0;

function counting() {
    let userInput = readline("type something that includes letters and numbers: ");

    for( let i = 0; i < userInput.length; i++) {

        if (userInput[i] ==
            "1" || userInput[i] == "2" || userInput[i] == "3" || userInput[i] == "4" || userInput[i] == "5" || userInput[i] == "6" || userInput[i] == "7" || userInput[i] == "8" || userInput[i] == "9" || userInput[i] == "0"  
            ){
                
                intCounter++;

        } else if(userInput[i] ==
            "a" || userInput[i] == "b" || userInput[i] == "c" || userInput[i] == "d" || userInput[i] == "e" || userInput[i] == "f" || userInput[i] == "g" || userInput[i] == "h" || userInput[i] == "i" || userInput[i] == "j" || userInput[i] == "k" || userInput[i] == "l" || userInput[i] == "m" || userInput[i] == "n" || userInput[i] == "o" || userInput[i] == "p" || userInput[i] == "q" || userInput[i] == "r" || userInput[i] == "s" || userInput[i] == "t" || userInput[i] == "u" || userInput[i] == "v" || userInput[i] == "x" || userInput[i] == "y" || userInput[i] == "x" || userInput[i] == "å" || userInput[i] == "ä" || userInput[i] == "ö"
            ){
                
                stringCounter++;

        }
    }

    console.log("there were " + stringCounter + " letters in that statement, and " + intCounter + " numbers.");
}

counting()