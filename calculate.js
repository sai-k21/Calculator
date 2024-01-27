function calculate(button) {
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    var operator = button.getAttribute('value');
    switch (operator) {
      case "+":
        document.getElementById("result").value = num1 + num2;
        break;
      case "-":
        document.getElementById("result").value = num1 - num2;
        break;
      case "*":
        document.getElementById("result").value = num1 * num2;
        break;
      case "/":
        document.getElementById("result").value = num1 / num2;
        break;
      case "%":
        document.getElementById("result").value = num1 % num2;
        break;
    }
  
  }