let firstNumber = undefined;
let operator = undefined;
let secondNumber = undefined;
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
   secondNumber = display.innerHTML
   console.log(secondNumber)

}

function clearDisplay(){
    display.innerHTML = ''
    firstNumber = ''
    secondNumber = ''
}

function operands(button) {

    if( button.value ==='+') {
        firstNumber = parseInt(display.innerHTML)
        operator = '+'
        display.innerHTML = ''
    } else {
        operate(firstNumber, operator, secondNumber)
        display.innerHTML = `${sum}`
    }   
}


console.log(display)
console.log(displayValue)