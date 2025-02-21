function calculator(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      return "Invalid operation";
      break;
  }
}

module.exports = calculator;
