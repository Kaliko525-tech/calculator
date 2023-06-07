let firstNumber = undefined;
let operator = undefined;
let secondNumber = undefined;
let displayValue = undefined

const zero = document.getElementById("zero")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const display = document.getElementById('display')

function add(a, b){
    let firNum = a;
    let sndNum = b;
    let sum = a + b
    return console.log(sum)
}

function sub(a, b){
    let firNum = a;
    let sndNum = b;
    let sum = a - b
    return console.log(sum)
}

function multiply(a, b){
    let firNum = a;
    let sndNum = b;
    let sum = a * b;
    return console.log(sum)
}

function divide(a, b){
    let firNum = a;
    let sndNum = b;
    let sum = a / b;
    return console.log(sum)
}

function operate(a, b ,c){
    let firstNum = a
    let secondNum = c
    let operator = b

    if (operator === '+') {
        add(firstNum, secondNum)
    } else if (operator === '-') {
        sub(firstNum, secondNum)
    }else if (operator === '*'){
        multiply(firstNum, secondNum)
    }else if (operator === '/'){
        divide(firstNum, secondNum)
    } else {
        console.log('error')
    }
    
}

function displayNumber(button){
   let x = button.value;
   display.innerHTML += x
   console.log(displayValue)
}


console.log(display)
console.log(displayValue)