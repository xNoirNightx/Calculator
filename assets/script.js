// all buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn-calculator");
const equalButton = document.querySelector(".btn-primary");
const clearButton = document.querySelector(".clear");
const sqrtButton = document.querySelector(".sqrt");
const exponentButton = document.querySelector(".exponent");
const percentageButton = document.querySelector(".percentage");

// listeners
buttons.forEach(button => {
  button.removeEventListener("click", handleButtonClick);
  button.addEventListener("click", handleButtonClick);
});

// clear and equal functions to display
equalButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clearDisplay);
sqrtButton.addEventListener("click", calculateSquareRoot);
exponentButton.addEventListener("click", calculateExponent);
percentageButton.addEventListener("click", calculatePercentage);

// clear
function clearDisplay() {
  display.value = "";
}

// scientific functions
function calculateSquareRoot() {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    const result = Math.sqrt(value);
    display.value = result;
    localStorage.setItem("calculatorResult", result);
  }
}

function calculateExponent() {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    const result = Math.pow(value, 2);
    display.value = result;
    localStorage.setItem("calculatorResult", result);
  }
}

function calculatePercentage() {
  const expression = display.value;
  const percentageValue = parseFloat(expression) / 100;
  const result = percentageValue * evaluateExpression(expression);
  display.value = result;
  localStorage.setItem("calculatorResult", result);
}

// add function to stop duplication
function handleButtonClick() {
  const value = this.textContent;
  display.value += value;
}

// local storage
function calculate() {
  try {
    const result = evaluateExpression(display.value);
    display.value = result;
    localStorage.setItem("calculatorResult", result);
  } catch (error) {
    display.value = "Error";
    localStorage.removeItem("calculatorResult");
  }
}

// evaluate 
function evaluateExpression(expression) {
  return Function(`"use strict"; return (${expression})`)();
}

  