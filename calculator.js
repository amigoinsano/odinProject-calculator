/* functions */
function handleInput() {
    const last = inputArray.length - 1;
    if (!isNaN(this.id)) {
        if (inputArray.length < 1 ||inputArray.length > 1 && isNaN(inputArray[last])) {
            inputArray.push(this.id);
        } else {
            inputArray[last] += this.id;
        }
    } else if (isNaN(inputArray[last])) {
        inputArray[last] = this.id;
    } else {
        inputArray.push(this.id);
    }
    createDisplay();
}

function createDisplay() {
    string = "";
    inputArray.forEach(element => {
        if (isNaN(element)) {
            string += functionDisplay(element);
        } else {
            string += element;
        }
    });
    display.textContent = string;
}

function functionDisplay(input) {
    switch (input) {
        case "divide":
            return " / ";
        case "multiply":
            return " * ";
        case "add":
            return " + ";
        case "subtract":
            return " - ";
    }
}

function createResult() {
    let result = 0;
    let temp;
    for (let i = 1; i < inputArray.length; i += 2) {
        temp = calculate(inputArray[i], parseFloat(inputArray[i - 1], 10), parseFloat(inputArray[i + 1], 10));
        if (temp === "error") {
            display.textContent = "ERROR";
            inputArray = [];
            return;
        }
        result += temp;
    }
    result = result.toFixed(2);
    display.textContent = result;
    inputArray = [result];
}

function calculate(action, num1, num2) {
    switch (action) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            if (num2 != 0) {
                console.log(num1/num2);
                return num1 / num2;
            } else {
                alert("Dividing by zero is bad for life, the universe and everything.")
                return "error";
            }
    }
}

function clearCalculator() {
    inputArray = [];
    display.textContent = "";
}

/* global variables */
const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation-key');
let inputArray = [];

/* add event listeners to number and function keys */
numberButtons.forEach(button => {
    button.addEventListener('click', handleInput);
});

operationButtons.forEach(button => {
    button.addEventListener('click', handleInput);
})

document.querySelector('#equals').addEventListener('click', createResult);
document.querySelector('#clear').addEventListener('click', clearCalculator);

