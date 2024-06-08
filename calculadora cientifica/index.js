let display = document.getElementById('display');

function appendToDisplay(value) {
    display.innerText += value;
}

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculateResult() {
    let expression = display.innerText;

    // Tratar operações avançadas
    expression = expression.replace('^', '**');
    expression = expression.replace('√', 'Math.sqrt');
    expression = expression.replace('sin', 'Math.sin');
    expression = expression.replace('cos', 'Math.cos');
    expression = expression.replace('tan', 'Math.tan');

    try {
        let result = eval(expression);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Erro';
    }
}
