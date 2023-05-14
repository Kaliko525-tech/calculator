let firstNumber = undefined;
let operator = undefined;
let secondNumber = undefined;

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
