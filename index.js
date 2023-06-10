const numButtons = document.querySelectorAll('.num')
const opsButtons = document.querySelectorAll('.ops')
const clearAll = document.querySelector('.ac')
const equalButton = document.querySelector('.equ')
const display = document.querySelector('#display')
const sumDisplay = document.querySelector('#sumDisplay')

let currentNum = ''
let previousNum = ''
let operationState = ''

function calculate() {
    
    let previous = parseFloat(previousNum)
    let current = parseFloat(currentNum)
    let result
    if (operationState == '+') {
        result = previous + current
    } else if (operationState == '-') {
        result = previous - current
    } else if (operationState == '/') {
        result = previous / current
    } else if (operationState == '*') {
        result = previous * current
    }

    console.log(previous)
    console.log(current)
    currentNum = result
    previousNum = ''
    operationState = ''
}

function buttonCont() {

    numButtons.forEach((button) => {

        button.addEventListener('click', () => {
            if (currentNum == 0) {
                currentNum = ''
            }
            if (button.innerText == '.' && currentNum.includes('.')) return
            currentNum += (button.innerText)
            refreshDisplay()
            console.log(currentNum)
        })
    })

    opsButtons.forEach((button) => {

        button.addEventListener('click', () => {
            operate()
            operationState = (button.innerText)
            
            currentNum = ''
            refreshDisplay()

            console.log(operationState)
        })
    })

    equalButton.addEventListener('click', () => {
        calculate();
        refreshDisplay()
    });

    clearAll.addEventListener('click', () => {
        currentNum = ''
        previousNum = ''
        operationState = ''
        refreshDisplay()
    })

}

function operate() {
    if (currentNum == '') return;

    if (previousNum !== '' && operationState !== '') {
        calculate()
    }
    previousNum = currentNum ;
    currentNum = ''
}

function refreshDisplay() {
    display.textContent = operationState + '' + currentNum
    sumDisplay.textContent = previousNum
}

buttonCont()