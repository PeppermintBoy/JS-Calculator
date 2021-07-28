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



let firstNumber = function(e) {
    console.log(`array = ${array}`);
    console.log(`array2 = ${array2}`);
    let number = e.target.textContent;
    array.push(number);
    let joinedArray = array.join('');
    screen.value = joinedArray;
    return joinedArray.split('');
}

function operate(e) {
    if (e.target.textContent == '+' || e.target.textContent == '-' || e.target.textContent == 'x' || e.target.textContent == '÷') {
        console.log(operator);
        if (operator) {
            const joinedArray = parseInt(array.join(''));
            const joinedArray2 = parseInt(array2.join(''))
            if (operator == '+') {
                operator = e.target.textContent;
                const answer = add(joinedArray2, joinedArray);
                screen.value = answer;
                array2 = answer.toString().split('');
                array = [];
                console.log(`array = ${array}`);
                console.log(`array2 = ${array2}`);
                return;
            } 

            else if (operator == '-') {
                operator = e.target.textContent;
                const answer = subtract(joinedArray2, joinedArray);
                screen.value = answer;
                array2 = answer.toString().split('');
                array = [];
                return;
            }  
            else if (operator == 'x') {
                operator = e.target.textContent;
                const answer = multiply(joinedArray2, joinedArray);
                screen.value = answer;
                array2 = answer.toString().split('');
                array = [];
                return;
            }
            else if (operator == '÷') {
                operator = e.target.textContent;
                const answer = divide(joinedArray2, joinedArray);
                screen.value = answer;
                array2 = answer.toString().split('');
                array = [];
                return;
            }

        }
        /*else if (array2 !== []) {
            operator = e.target.textContent;
            console.log(`array = ${array}`);
            console.log(`array2 = ${array2}`);
            return listening;
        }  */
        
        operator = e.target.textContent;
        
        array2 = array;
        array = [];
        console.log(`array = ${array}`);
        console.log(`array2 = ${array2}`);
        return;
    }
    else if (e.target.textContent == '=') {
        const joinedArray = parseInt(array.join(''));
        const joinedArray2 = parseInt(array2.join(''))
        if (operator == '+') {
            const answer = add(joinedArray2, joinedArray);
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            operator = false;
            console.log(`array = ${array}`);
            console.log(`array2 = ${array2}`);
            return; 
        } 
        else if (operator == '-') {
            const answer = subtract(joinedArray2, joinedArray);
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            operator = false;
            return;
        }  
        else if (operator == 'x') {
            const answer = multiply(joinedArray2, joinedArray);
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            operator = false;
            return;
        }
        else if (operator == '÷') {
            const answer = divide(joinedArray2, joinedArray);
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            operator = false;
            return;
        }
         
    }
    return firstNumber(e);
} 
