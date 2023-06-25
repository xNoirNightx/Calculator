// all buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn-calculator");
const equalButton = document.querySelector(".btn-primary");

// listerns 
buttons.forEach(button => {
    button.removeEventListener("click", handleButtonClick); 
    button.addEventListener("click", handleButtonClick);
  });
  
// clear and equal functions to display
  equalButton.addEventListener("click", calculate);
  clearButton.addEventListener("click", clearDisplay);
  
//    add function to stop duplication
  function handleButtonClick() {
    const value = this.textContent;
    display.value += value;
  }

//   local storage
  function calculate() {
    try {
      const result = eval(display.value);
      display.value = result;
      localStorage.setItem("calculatorResult", result);
    } catch (error) {
      display.value = "Error";
      localStorage.removeItem("calculatorResult");
    }
  }
  