function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNumber, secondNumber, operator){
    return operator(firstNumber, secondNumber);
}

//Inputted number shows on screen
//store that inputted number
//Add the first and second number when an operator is pressed.

const screen = document.querySelector('.digits');
const keys = document.querySelectorAll('.key');
let array = [];
let array2 = [];
let operator;

keys.forEach(key => key.addEventListener('click', operate));


function operate(e) {
    if (e.target.textContent == '+' || e.target.textContent == '-' || e.target.textContent == 'x' || e.target.textContent == '÷') {
        operator = e.target.textContent;
        array2 = array;
        array = [];
        console.log(array);
        console.log(array2);
        return screen.value = '0';
    }
    else if (e.target.textContent == '=') {
        const joinedArray = parseInt(array.join(''));
        const joinedArray2 = parseInt(array2.join(''))
        if (operator == '+') {
            return screen.value = add(joinedArray2, joinedArray);
        } 
        else if (operator == '-') {
            return screen.value = subtract(joinedArray2, joinedArray);
        }  
        else if (operator == 'x') {
            return screen.value = multiply(joinedArray2, joinedArray);
        }
        else if (operator == '÷') {
            return screen.value = divide(joinedArray2, joinedArray);
        }
         
    }
    console.log(e.target.textContent);
    let number = e.target.textContent;
    array.push(number);
    let joinedArray = array.join('');
    return screen.value = joinedArray;
} 

