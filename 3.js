document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = null;
    let firstOperand = null;

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (value === 'C') {
                currentInput = '';
                operator = null;
                firstOperand = null;
                display.textContent = '';
            } else if (value === '=') {
                if (operator && currentInput) {
                    currentInput = String(calculate(firstOperand, parseFloat(currentInput), operator));
                    operator = null;
                    firstOperand = null;
                    display.textContent = currentInput;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    if (firstOperand === null) {
                        firstOperand = parseFloat(currentInput);
                        currentInput = '';
                    }
                    operator = value;
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
});
