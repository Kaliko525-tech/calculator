console.log("hello World!")
let sum = 0

function sumAdd(displayValue) {
    
    
}

function sumMinus(num1, num2) {
    sum = num1 - num2
}

function sumMuiltiply(num1, num2) {
    sum = num1 * num2
}

function sumDivide(num1, num2) {
    sum = num1 / num2
}

function sumAll() {
    return display.textContent = sum ;
}


const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const zero = document.querySelector("#zero")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const divide = document.querySelector("#divide")
const multiply = document.querySelector("#multiply")
const equals = document.querySelector("#equals")
const display = document.querySelector(".display")
const clear = document.querySelector("#clear")

one.addEventListener("click", () => display.textContent += 1)
two.addEventListener("click", () => display.textContent += 2)
clear.addEventListener("click", () => display.textContent = "")

console.log(display.innerHTML)
