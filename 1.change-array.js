let myArray = [0, 1, 2, 3];
console.log(myArray);

function changeArray(array) {
    const value1 = array[1];
    const value2 = array[3];

    array[1] = value2;
    array[3] = value1;
    console.log(array);
};

changeArray(myArray);
