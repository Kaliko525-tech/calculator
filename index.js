let previousValue = undefined;
let operator = undefined;
let currentValue = undefined;
let displayValue = undefined

const display = document.getElementById('display')

function add(a, b){
    sum = a + b
    return sum
}

function sub(a, b){
    let sum = a - b
    return sum
}

function multiply(a, b){
    let sum = a * b;
    return sum
}

function divide(a, b){
    let sum = a / b;
    return sum
}

function operate(a, b ,c){
    let firstNum = a
    let secondNum = parseInt(c)
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
   currentValue = display.innerHTML

}

function clearDisplay(){
    display.innerHTML = ''
    previousValue = ''
    currentValue = ''
}

function operands(button) {

    if( button.value ==='+') {
        previousValue = parseInt(currentValue)
        operator = '+'
        display.innerHTML = '+'
    } else {
        operate(previousValue, operator, currentValue)
        display.innerHTML = `${sum}`
    }   
}


console.log(display)
console.log(displayValue)