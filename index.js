let display = document.getElementById("display");

const addNumber = (number) => {
  display.value += number;
};

const appendOperator = (operator) => {
  display.value += operator;
};

const clearInput = () => {
  display.value = "";
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
};
