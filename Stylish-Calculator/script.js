let inputField = document.getElementById('input');
let outputField = document.getElementById('output');
let expression = '';
let lastAnswer = 0;

function append(value) {
  expression += value;
  inputField.textContent = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    lastAnswer = result;
    outputField.textContent = result;
    expression = result.toString();
    inputField.textContent = expression;
  } catch (e) {
    outputField.textContent = "Error";
    expression = '';
  }
}

function clearDisplay() {
  expression = '';
  inputField.textContent = '';
  outputField.textContent = '0';
}

function delChar() {
  expression = expression.slice(0, -1);
  inputField.textContent = expression;
}

function useAns() {
  expression += lastAnswer;
  inputField.textContent = expression;
}

function toggleSign() {
  if (expression) {
    if (expression.startsWith('-')) {
      expression = expression.slice(1);
    } else {
      expression = '-' + expression;
    }
    inputField.textContent = expression;
  }
}
