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
    if (b === 0) return alert('DO NOT DIVIDE BY ZERO!!!!!!!!!!!!!');
    return a / b;
}

// function to run the calculator
function operate(operator, firstNumber, secondNumber) {
    return window[operator](firstNumber, secondNumber);
}

// global variables
let firstNumber = null;
let operator = '';
let secondNumber = null;

// function to bind the numberic button presses
function bindNumericButton (num) {
    let numString = '';
    switch (num) {
        case 0: numString = 'zero';     break;
        case 1: numString = 'one';      break;
        case 2: numString = 'two';      break;
        case 3: numString = 'three';    break;
        case 4: numString = 'four';     break;
        case 5: numString = 'five';     break;
        case 6: numString = 'six';      break;
        case 7: numString = 'seven';    break;
        case 8: numString = 'eight';    break;
        case 9: numString = 'nine';     break;
    }
    let button = document.querySelector('#' + numString);
    button.addEventListener('click', (e) => {
        let result = document.querySelector('#result');
        let currentResult = result.innerHTML;
        // when numbers are null, first click logic is done, this just sets the value to the number
        // when numbers are not null, on the second click, this concatenates the number
        if (firstNumber == null) {
            firstNumber = num;
            result.innerHTML = num;
        } else if (secondNumber == null) {
            secondNumber = num;
            result.innerHTML = num;
        } else if (firstNumber != null) {
            result.innerHTML = currentResult + num.toString();
            firstNumber = parseInt(currentResult + num.toString());
        } else if (secondNumber != null) {
            result.innerHTML = currentResult + num.toString();
            secondNumber = parseInt(currentResult + num.toString());
        }
    })
}

for (let i = 0; i < 10; i++) {
    bindNumericButton(i);
}

// function to bind operator buttons
// when an operator button is pressed set operator pressed to true
// this ensures the new number will go into the secondNumber
function bindOperatorButton(string) {
    let button = document.querySelector('#' + string);
    button.addEventListener('click', (e) => {
        // if operator is not blank that means the user has already
        // ran one calculation, run operate command
        // this lets the user chain operations together
        let result;
        if (operator != '') {
            result = operate(operator, firstNumber, secondNumber);
            firstNumber = result;
            secondNumber = null;
        } else {
            result = 0;
        }
        operator = string;
        // clear result back to 0
        // this allows user to enter a second number
        document.querySelector('#result').innerHTML = result;
    });
}

bindOperatorButton('add');
bindOperatorButton('subtract');
bindOperatorButton('multiply');
bindOperatorButton('divide');

// bind equals button click to operate function
let equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', (e) => {
    let result = operate(operator, firstNumber, secondNumber);
    document.querySelector('#result').innerHTML = result;
    operator = '';
    // set firstNumber equal to result so we can continue on
    firstNumber = result;
});

// bind clear button
// this should clear the current window
// if there is an operator we clear the second number
// if an operator wasn't pressed we clear the first number
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
    let result = document.querySelector('#result');
    if (operator == '') {
        firstNumber = null;
        secondNumber = null;
        result.innerHTML = 0;
    } else {
        secondNumber = null;
        result.innerHTML = 0;
    }
});


