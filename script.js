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

const btn = document.querySelectorAll("button");
const display = document.querySelector("#display-numbers");

window.onload = function() {
    display.textContent = '0';
}

//pressing a button to update the display

btn.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = button.textContent;
    })
})


