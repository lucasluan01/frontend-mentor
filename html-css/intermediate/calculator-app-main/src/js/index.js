const expression = document.getElementById("expression");
const sliderValue = document.getElementById("slider");
const theme = document.body.getAttribute('data-theme');

function keyPress(value) {
  switch (value) {
    case "Del":
      expression.textContent = expression.textContent.slice(0, -1);
      break;
    case "Reset":
        expression.textContent = "";
        break;
    case "=":
        expression.textContent = expression.textContent.replaceAll("x", "*");
        expression.textContent = eval(expression.textContent);
        break;
    default:
      expression.textContent += value;
      break;
  }

}

function changeTheme(value) {
  console.log(value);
  if (value === "1") {
    document.body.setAttribute("data-theme", "blue");
  }
  else if (value === "2") {
    document.body.setAttribute("data-theme", "gray");
  }
  else if (value === "3") {
    document.body.setAttribute("data-theme", "violet");
  }

}

