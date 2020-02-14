const add = function (num1, num2) {
    return (+num1) + (+num2);
}

const subtract = function (num1, num2) {
    return num1 - num2;
}

const multiply = function (num1, num2) {
    return num1 * num2;
}

const divide = function (num1, num2) {
    if(num1 == 0 || num2 == 0){
        alert("Please keep the universe intact");
        return;
    }
    return num1 / num2;
}

const callOperation = function (operation, num1, num2) {
    switch (operation) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
    }
}

const chainOperations = function (input) {
    let result = 0;
    for (let i = 1; i < input.length; i += 2) {
        if (i > 1) {
            result = callOperation(input[i], result, input[i + 1]);
        } else {
            result += callOperation(input[i], input[i - 1], input[i + 1]);
        }
    }
    inputArray = [];
    inputArray.push(result);
    return result;
}

let inputArray = [];

const numberInput = function (input) {
    if (inputArray.length === 0) {
        inputArray.push(input);
    } else if (inputArray.length != 0 && isNaN(inputArray[inputArray.length - 1])) {
        inputArray.push(input);
    } else {
        inputArray[inputArray.length - 1] = inputArray[inputArray.length - 1] + input;
    }
}

const functionInput = function (input) {
    if (input === "equals") {
        const result = chainOperations(inputArray);
        document.querySelector("#display").textContent = result;
    } else if (isNaN(inputArray[inputArray.length - 1])) {
        inputArray[inputArray.length - 1] = input;
    } else if(input === "clear") {
        inputArray = [];
        document.querySelector("#display").textContent = "";
    } else {
        inputArray.push(input);
    }
}

const numbers = document.querySelectorAll(".number");
numbers.forEach(element => {
    element.addEventListener("click", function () {
        numberInput(this.id);
        inputDisplay();
    });
});

const operationKeys = document.querySelectorAll(".operation-key");
operationKeys.forEach(element => {
    element.addEventListener("click", function () {
        functionInput(this.id);
        inputDisplay();
    });
});



const inputDisplay = function () {
    const display = document.querySelector("#display");
    let string = "";
    inputArray.forEach(element => {
        if (isNaN(element)) {
            switch (element) {
                case "multiply":
                    string += " * ";
                    break;
                case "divide":
                    string += " / ";
                    break;
                case "subtract":
                    string += " - ";
                    break;
                case "add":
                    string += " + ";
                    break;
            }
        } else {
            string += element;
        }
    })
    if (string.length != 0) {
        display.textContent = string;
    }
}
