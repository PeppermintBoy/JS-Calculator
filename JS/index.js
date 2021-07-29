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

//Inputted number shows on screen
//store that inputted number
//Add the first and second number when an operator is pressed.

const screen = document.querySelector('.digits');
const keys = document.querySelectorAll('.key');
const reset = document.querySelector('.reset');
const deleteKey = document.querySelector('.delete');

let array = [];
let array2 = [];
let operator;
//Variables for equal input in a row.
let firstEqual; //true or false
let firstNumberForEqual; //Last number inputted
let operatorForEqual; //Last operator inputted

keys.forEach(key => key.addEventListener('click', operate));
reset.addEventListener('click', resetAll);
deleteKey.addEventListener('click', deleteLastDigit);


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
        firstEqual = false;
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
        
        operator = e.target.textContent;
        
        array2 = array;
        array = [];
        console.log(`array = ${array}`);
        console.log(`array2 = ${array2}`);
        return;
    }
    //When '=' is clicked for the first time.
    else if (e.target.textContent == '=' && firstEqual == false) {
        const joinedArray = parseInt(array.join(''));
        const joinedArray2 = parseInt(array2.join(''));
        firstNumberForEqual = joinedArray;
        firstEqual = true;
        if (operator == '+') {
            const answer = add(joinedArray2, joinedArray);
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            operatorForEqual = operator;
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
            operatorForEqual = operator;
            operator = false;
            return;
        }  
        else if (operator == 'x') {
            const answer = multiply(joinedArray2, joinedArray);
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            operatorForEqual = operator;
            operator = false;
            return;
        }
        else if (operator == '÷') {
            const answer = divide(joinedArray2, joinedArray);
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
            const answer = add(joinedArray2, firstNumberForEqual);
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            return;
        }  
        else if (operatorForEqual == '-') {
            const answer = subtract(joinedArray2, firstNumberForEqual);
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            return;
        }  
        else if (operatorForEqual == 'x') {
            const answer = multiply(joinedArray2, firstNumberForEqual);
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            return;
        }  
        else if (operatorForEqual == '÷') {
            const answer = divide(joinedArray2, firstNumberForEqual);
            screen.value = answer;
            array2 = answer.toString().split('');
            array = array2;
            return;
        }  
    }
    return firstNumber(e);
} 

function resetAll() {
    array = [];
    array2 = [];
    operator = false;
    firstEqual = false;
    screen.value = '';
}

function deleteLastDigit() {

console.log(array)
    array.pop(); //Firstly, pops 'delete', which was inputted upon click, from array.
    array.pop(); //Secondly, pops the last digit from the array.
    let joinedArray = array.join('');
    return screen.value = joinedArray;
}