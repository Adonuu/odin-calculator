// basic functions for the calculator
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

// function to run the calculator
function operate(operator, firstNumber, secondNumber) {
    return window[operator](firstNumber, secondNumber);
}

// global variables
let firstNumber = 0;
let operator = '';
let secondNumber = 0;
