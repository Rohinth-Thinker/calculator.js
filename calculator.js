const inputValue = document.querySelectorAll('.js-input');
let outputValue = document.querySelector('.output-show');
let calc = '';
const operatorList = ['+', '-', '*', '/', '.']
const colorList = ['lightcoral', 'black', 'white', 'green', 'blue', 'red', 'yellow', 'purple']


inputValue.forEach((element) => {
    element.addEventListener('click', () => {
        let dataColorId = element.dataset.colorId;
        check(element, dataColorId);
    })
})

function check(element, colorId) {
    elementValue = element.value
    if (elementValue === 'c') {
        clear();
    }

    else if (elementValue === 'bs') {
        backSpace();
    }

    else if (elementValue === 'percent') {
        percerntage();
    }

    else if (elementValue === 'divide') {
        divideMultiplyCheck('divide');
    }

    else if (elementValue === 'multiply') {
        divideMultiplyCheck('multiiply');
    }

    else if (elementValue === 'subract') {
        subraction();
    }

    else if (elementValue === 'add') {
        addition();
    }

    else if (elementValue === 'answer') {
        answer();
    }

    else if (elementValue === 'dot') {
        dot();
    }

    else if (elementValue === 'remainder') {
        remainder();
    }

    else if (elementValue === 'outlineColor') {

        outlineColorFunction(element, colorId);
    }

    else if (elementValue === 'backgroundColor') {
        backgroundColorFunction(element, colorId);
    }

    else {
        numbers(elementValue);
    }    
    display();

}


function display() {
    if (calc === '') {
        outputValue.innerText = 0;
    }

    else {

        outputValue.innerText = calc;
    }
}

function numbers(element) {
    if (typeof calc === 'number') {
        calc = '';
    }
    calc += element;
}

function clear() {
    calc = '';
}

function operatorChecking () {
    calc = calc.toString();
    let lastElement = calc.slice(-1);
    if (operatorList.includes(lastElement)) {
        calc = calc.slice(0, -1);
    }
}

function addition () {
    operatorChecking();
    calc += '+'
}

function subraction() {
    operatorChecking();
    calc += '-';
}

function multiplication() {
    operatorChecking();
    calc += '*';
}

function division () {
    operatorChecking();
    calc += '/';
}

function dot() {
    operatorChecking();
    calc += '.'
}

function backSpace() {
    calc = calc.slice(0, -1);
}

function answer() {
    operatorChecking();
    evaluate = eval(calc);
    calc = evaluate
}


function divideMultiplyCheck (operator) {
    if (calc.length === 0) {
        return
    }

    else if (operatorList.includes(calc)) {
        return
    }

    else {
        if (operator === 'divide') {
            division();
        }

        else {
            multiplication();
        }
    }
}

function colorPickerFunction (colourId) {
    let colorId = Number(colourId) + 1;
    if (colorId === 8) {
        colorId = 0;
    } 
    return colorId

}

function outlineColorFunction(element, colourId) {
    let colorId = colorPickerFunction(colourId);
    const mainConatainer = document.querySelector('.js-main-container');
    mainConatainer.style.outlineColor = colorList[colorId];
    element.dataset.colorId = colorId.toString();
}

function backgroundColorFunction(element, colourId) {
    let colorId = colorPickerFunction(colourId);
    const backgroundColor = document.body;
    backgroundColor.style.backgroundColor = colorList[colorId];
    element.dataset.colorId = colorId.toString();
}

