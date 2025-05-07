//operator functions

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

//creating variables to update calculator display
var firstNumber;
var secondNumber;
var operator;
var arr;
var test;



//function that takes two numbers and a callback function as the operator

function operate (operator, a, b) {
    return operator(a, b);
}

console.log(operate(subtract, 5, 4))

const btn = document.querySelectorAll(".button");
const displayNumbers = document.querySelector("#display-numbers");
const operatorButton = document.querySelectorAll(".operator");
const equals = document.querySelectorAll(".equals");
const clearButton = document.querySelector(".clear");
const defaultZero = document.querySelector("#defaultZero");

var operatorButtonClicked = false;
console.log(operatorButtonClicked)



//pressing a button to update the display

btn.forEach((button) => {
    button.addEventListener("click", (e) => {
    defaultZero.textContent = '';
    if (operatorButtonClicked === false) {
        displayNumbers.textContent += button.textContent;
        firstNumber = Number(displayNumbers.textContent);
        console.log(firstNumber)
    } 
    }) 
})



//clear button that removes displayed numbers and brings back the default Zero;
clearButton.addEventListener("click", () => {
    displayNumbers.textContent = '';
    defaultZero.textContent = '0';
    operatorButtonClicked = false;
    console.log(operatorButtonClicked)
    arr = [];
    
}) 

//operator button clicked check
    operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
    operatorButtonClicked = true;
    console.log(operatorButtonClicked)
    operator = button.textContent;
    test = button.id;
    displayNumbers.textContent = firstNumber + operator;

    })
    })

//retrieve 2nd number and puts the first and 2nd number into an array.

    btn.forEach((button) => {
        button.addEventListener("click", (e) => {
        if (operatorButtonClicked === true) {
             displayNumbers.textContent += button.textContent;
             secondNumber = displayNumbers.textContent;
             arr = secondNumber.split(operator).map(Number);
             console.log(arr);
        } 
        }) 
    })

//when equals is pressed, it runs the previously made operate function

 equals.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(operate(test, arr[0], arr[1]))

    })
    })
