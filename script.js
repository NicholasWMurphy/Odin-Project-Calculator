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


//function that takes two numbers and a callback function as the operator

function operate (operator, a, b) {
    return operator(a, b);
}

console.log(operate(subtract, 5, 5))

const btn = document.querySelectorAll(".button");
const displayNumbers = document.querySelector("#display-numbers");
const operatorButton = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const defaultZero = document.querySelector("#defaultZero");

var operatorButtonClicked = false;
console.log(operatorButtonClicked)



//pressing a button to update the display

btn.forEach((button) => {
    button.addEventListener("click", (e) => {
    defaultZero.textContent = '';
    if (operatorButtonClicked === false) {
        displayNumbers.textContent += button.id;
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
}) 

//operator button clicked check
    operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
    operatorButtonClicked = true;
    operator = button.id;
    let arr = []
    arr.push(firstNumber + operator);
    console.log(arr)
    
    })
    })

//retrieve 2nd number 

