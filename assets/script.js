// all buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn-calculator");
const equalButton = document.querySelector(".btn-primary");

// listerns 
buttons.forEach(button => {
    button.addEventListener("click", () => {
      display.value += button.textContent;
    });
  });
  
  equalButton.addEventListener("click", () => {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  });

 
  buttons.forEach(button => button.addEventListener("click", () => display.value += button.textContent));
  
  equalButton.addEventListener("click", () => {
    try {
      const result = eval(display.value);
      display.value = result;
      localStorage.setItem("calculatorResult", result);
    } catch (error) {
      display.value = "Error";
      localStorage.removeItem("calculatorResult");
    }
  });
  