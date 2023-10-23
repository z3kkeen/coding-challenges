// - ask for five numbers
// - add all numbers together then divide by 5
// - log finale number

import readline from "read-console-input"

let totalCount = 0;

function neverBackDownNeverWHAT() {
    for(let i = 0; i < 5; i++) {
       
        let number = Number(readline("enter number " + [i] + "/5: "));
        totalCount = totalCount + number;
    };
  
    const average = totalCount / 5;
    console.log(average);
};

neverBackDownNeverWHAT()