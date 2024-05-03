/*
function Multiplication(num1, num2) {
    return num1 * num2;
}

console.log(Multiplication(2,3)); */

/* how to import modules in CS js */
const {GenerateRandomNumber, celciusToFahrenheit} = require('./utlis');

import getPosts from './postControll.js';

console.log(`Random number: ${GenerateRandomNumber()}`);

console.log(`celcius to fahreheit: ${celciusToFahrenheit(0)}`);

console.log(getPosts());






