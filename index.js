let previousValue = undefined;
let operator = undefined;
let currentValue = undefined;
let displayValue = undefined
let sum = ""

const display = document.getElementById('display')
const sumDisplay = document.getElementById('sumDisplay')


function operate(a, c){
    let firstNum = parseFloat(a)
    let secondNum = parseFloat(c)

    if (operator === '+') {
       return sum = firstNum + secondNum
    } else if (operator === '-') {
        return sum = firstNum - secondNum
    }else if (operator === '*'){
        return sum = firstNum * secondNum
    }else if (operator === '/'){
        return sum = firstNum / secondNum
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
    operator = ''
    sum = ''
    sumDisplay.innerHTML = ''
}

function operands(button) {

    if( button.value ==='+') {
        previousValue = currentValue
        operator = '+'
        display.innerHTML = ''
    } else if( button.value ==='-') {
        previousValue = currentValue
        operator = '-'
        display.innerHTML = ''
    } else if( button.value ==='*') {
        previousValue = currentValue
        operator = '*'
        display.innerHTML = ''
    } else if( button.value ==='/') {
        previousValue = currentValue
        operator = '/'
        display.innerHTML = ''
    } else {
        operate(previousValue, currentValue)
        display.innerHTML = `${previousValue} ${operator} ${currentValue}`
        sumDisplay.innerHTML = `${sum}`
    }   
}



console.log('test')