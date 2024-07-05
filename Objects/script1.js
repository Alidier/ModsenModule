function checkValueInArray(arr, value) {
    'use strict';

    return arr.includes(value);
}

const array = [1, 2, 3, 4, 5];
const valueToCheck = 3;

console.log(checkValueInArray(array, valueToCheck)); 
