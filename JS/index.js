//Variables
const screen = document.querySelector('.digits');
const keys = document.querySelectorAll('.key');
const reset = document.querySelector('.reset');
const deleteKey = document.querySelector('.delete');

let array = [];
let array2 = [];
let operator;
//Variables for when equals are inputted in a row.
let firstEqual; //true or false
let firstNumberForEqual; //Last number inputted
let operatorForEqual; //Last operator inputted

//Event listeners.
keys.forEach(key => key.addEventListener('click', operate));
reset.addEventListener('click', resetAll);
deleteKey.addEventListener('click', deleteLastDigit);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function operate(e) {
    //Give error when operators are first things to be inputted.
    if (array.length == 0 && array2.length == 0 && (e.target.textContent == '+' || e.target.textContent == '-' || e.target.textContent == 'x' || e.target.textContent == '÷' || e.target.textContent == '=')) {
        return resetAll();
    }
    //Ignore '=' input when pressed before input of 2nd number.
    else if (array2.length == 0 && e.target.textContent == '=') {
        return;
    }
    else if (e.target.textContent == '+' || e.target.textContent == '-' || e.target.textContent == 'x' || e.target.textContent == '÷') {
        firstEqual = false;
        //Prevent operators to be inputted in a row.
        if (operator && array.length == 0) {
            return;
        }
        else if (operator) {
            const joinedArray = parseInt(array.join(''));
            const joinedArray2 = parseInt(array2.join(''))
            if (operator == '+') {
                operator = e.target.textContent;
                const answer = round(add(joinedArray2, joinedArray));
                screen.value = answer;
                array2 = answer.toString().split('');
                array = [];
                return;
            } 

            else if (operator == '-') {
                operator = e.target.textContent;
                const answer = round(subtract(joinedArray2, joinedArray));
                screen.value = answer;
                array2 = answer.toString().split('');
                array = [];
                return;
            }  
            else if (operator == 'x') {
                operator = e.target.textContent;
                const answer = round(multiply(joinedArray2, joinedArray));
                screen.value = answer;
                array2 = answer.toString().split('');
                array = [];
                return;
            }
            else if (operator == '÷') {
                if (joinedArray == "0") {
                    return screen.value = 'ERROR';
                }
                operator = e.target.textContent;
                const answer = round(divide(joinedArray2, joinedArray));
                screen.value = answer;
                array2 = answer.toString().split('');
                array = [];
                return;
            }

        }
        
        operator = e.target.textContent;
        array2 = array;
        array = [];
        return;
    }
    //When '=' is clicked right after an operator. return nothing.
    else if (e.target.textContent == '=' && array.length == 0) {
        return;
    }
    //When '=' is clicked for the first time.
    else if (e.target.textContent == '=' && firstEqual == false) {
        const joinedArray = parseInt(array.join(''));
        const joinedArray2 = parseInt(array2.join(''));
        firstNumberForEqual = joinedArray;
        firstEqual = true;
        if (operator == '+') {
            const answer = round(add(joinedArray2, joinedArray));
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            operatorForEqual = operator;
            operator = false;
            return; 
        } 
        else if (operator == '-') {
            const answer = round(subtract(joinedArray2, joinedArray));
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            operatorForEqual = operator;
            operator = false;
            return;
        }  
        else if (operator == 'x') {
            const answer = round(multiply(joinedArray2, joinedArray));
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            operatorForEqual = operator;
            operator = false;
            return;
        }
        else if (operator == '÷') {
            if (joinedArray == '0') {
                return screen.value = 'ERROR';
            }
            const answer = round(divide(joinedArray2, joinedArray));
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            operatorForEqual = operator;
            operator = false;
            return;
        }
    }
    //When '=' is clicked in a row.
    else if (e.target.textContent == '=' && firstEqual == true) {
        const joinedArray2 = parseInt(array2.join(''));

        if (operatorForEqual == '+') {
            const answer = round(add(joinedArray2, firstNumberForEqual));
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            return;
        }  
        else if (operatorForEqual == '-') {
            const answer = round(subtract(joinedArray2, firstNumberForEqual));
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            return;
        }  
        else if (operatorForEqual == 'x') {
            const answer = round(multiply(joinedArray2, firstNumberForEqual));
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            return;
        }  
        else if (operatorForEqual == '÷') {
            if (firstNumberForEqual == '0') {
                return screen.value = 'ERROR';
            }
            const answer = round(divide(joinedArray2, firstNumberForEqual));
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            return;
        }  
    }
    return firstNumber(e);
} 

let firstNumber = function(e) {
    let joinedArray;
    let number = e.target.textContent;
    if (e.target.textContent == '.' && array.includes('.')) {
        return;
    }
    array.push(number);
    joinedArray = array.join('');
    screen.value = joinedArray;
    return joinedArray.split('');
}

function resetAll() {
    array = [];
    array2 = [];
    operator = false;
    firstEqual = false;
    screen.value = '';
}

function deleteLastDigit() {
    array.splice(-2, 2); //Deletes 'delete' and last digit.
    let joinedArray = array.join('');
    return screen.value = joinedArray;
}

//Rounds up answer to show max 8 digits after decimal.
function round(value) {
    return Number(Math.round(value + 'e' + 8)+ 'e-' + 8);
}

//Enlarge key when clicked.
function enlargeKey(e) {
    const key = document.getElementById(`${e}`);
    if (e == 17) {
        return key.classList.add('enlargeEqual');
    }
    return key.classList.add('enlarge');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //Skip it if it's not a transform
    this.classList.remove('enlarge', 'enlargeEqual');
  }

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
