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
var arr;
var firstNumber = '';
var secondNumber = '';
var operator;
var test;
var operatorButtonClicked = false;
var equalsPressed = false;
var secondOperator;
var decimalPressed = false;
var finalCheck;





//function that takes two numbers and a callback function as the operator

function operate (operatorFunc, a, b) {
    secondNumber = '';
    firstNumber = operatorFunc(a, b).toString();
    operator = secondOperator;
    if (equalsPressed === true) {
        finalCheck = true;
        return Math.round(firstNumber * 100) / 100;
        
        } else {
            finalCheck = false;
            return Math.round(firstNumber * 100) / 100 + operator;
            
        }
    
}


const btn = document.querySelectorAll(".button");
const displayNumbers = document.querySelector("#display-numbers");
const operatorButton = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const defaultZero = document.querySelector("#defaultZero");
const decimal = document.querySelectorAll("#decimal");
const backspace = document.querySelector('.backspace')



//pressing a button to update the display
btn.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(firstNumber, secondNumber)
        defaultZero.textContent = '';
        displayNumbers.textContent += button.textContent
        if (operatorButtonClicked == false) {
            firstNumber += button.id;
        } else if (operatorButtonClicked == true) {
            secondNumber += button.id;
        } 

        if (finalCheck == true) {
            console.log('hmmmm')
            firstNumber = '';
            secondNumber = '';
            displayNumbers.textContent = button.textContent;
            firstNumber += button.id;
            finalCheck = false;
            operatorButtonClicked = false;
            
            
            
        }
    })
    })    

  




//clear button that removes displayed numbers and brings back the default Zero;
clearButton.addEventListener("click", () => {
    displayNumbers.textContent = '';
    defaultZero.textContent = '0';
    operatorButtonClicked = false;
    firstNumber = '';
    secondNumber = '';
    equalsPressed = false;
    decimalPressed = false;
}) 


//operator button clicked check
    operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(firstNumber, secondNumber)
        decimalPressed = false;
        equalsPressed = false;
        finalCheck = false;
        if (!displayNumbers.textContent.includes(operator)) {
        operator = button.textContent;
        test = button.id;
        displayNumbers.textContent += button.textContent;
        operatorButtonClicked = true;
        } else if (displayNumbers.textContent.includes(operator)) {
            secondOperator = button.textContent;
            getResult();
            test = button.id;
            if (!displayNumbers.textContent.includes(secondNumber)) {
                operator = button.textContent;
                test = button.id;
                displayNumbers.textContent = firstNumber + operator;
            }
        }
        
    }
)})
    
//when equals is pressed, it runs the previously made operate function

equals.addEventListener("click", () => {
    
    equalsPressed = true;
    getResult();
})

backspace.addEventListener("click", () => {
    displayNumbers.textContent = displayNumbers.textContent.substring(0, displayNumbers.textContent.length - 1);
    console.log(firstNumber, secondNumber);
    if (displayNumbers.textContent === '') {
        defaultZero.textContent = '0';
    }
    if (operatorButtonClicked == false) {
        firstNumber = firstNumber.substring(0, firstNumber.length - 1); 
        if (!firstNumber.includes(decimal)) {
            decimalPressed = false;
        }
    } else {
        secondNumber = secondNumber.substring(0, secondNumber.length - 1);
    } if (!secondNumber.includes(decimal)) {
        decimalPressed = false;
    }

    

})



//decimal limiter
decimal.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(firstNumber)
       if (decimalPressed == false) {
        displayNumbers.textContent += '.'
        if (!displayNumbers.textContent.includes(operator)) {
        firstNumber += '.'
        } else if (displayNumbers.textContent.includes(operator)) {
        secondNumber += '.'
        }
        decimalPressed = true;
       }
    }
)})
    

function getResult () {
    if (firstNumber && secondNumber) {
        console.log(firstNumber, secondNumber)
        
        if (test == 'add') {
            displayNumbers.textContent = operate(add, parseFloat(firstNumber), parseFloat(secondNumber)) 
        } else if (test == 'subtract') {
            displayNumbers.textContent = operate(subtract, parseFloat(firstNumber), parseFloat(secondNumber)) 
        } else if (test == 'multiply') {
            displayNumbers.textContent = operate(multiply, parseFloat(firstNumber), parseFloat(secondNumber))
        } else if (test == 'divide') {
            if (parseFloat(firstNumber) == 0 || parseFloat(secondNumber) == 0) {
                displayNumbers.textContent = 'nice try';
            } else {
            displayNumbers.textContent = operate(divide, parseFloat(firstNumber), parseFloat(secondNumber)) 
            }}
    }
    
    
}


       
        


 
   

  

    
  
    
    

