console.log("hello World!")
let sum = 0
let shouldReset = false
let currentOperator = null

function operate(operator, a, b) {
    if (operator === "+") return a + b
    if (operator === "-") return a - b
    if (operator === "*") return a * b
    if (operator === "/") return b !== 0 ? a / b : "Error"
    return b 
}

function handleOperator(operator) {
    let displayValue = display.textContent

    if (displayValue === "") return;

    if (shouldReset) {
        currentOperator = operator
        return
    }

    let number = Number(displayValue)

    if (currentOperator === null) {
        //first operation
        sum = number
    }

    else {
        // continue calculation
        sum = operate(currentOperator, sum, number)
        
        display.textContent = formatNumber(sum);
    }

    
        currentOperator = operator;
        shouldReset = true;

}

function handleEquals() {
    let displayValue = display.textContent;

    if (displayValue === "" || currentOperator === null) return;

    let number = Number(displayValue);

    sum = operate(currentOperator, sum, number)
    

    display.textContent = formatNumber(sum)
    
    //reset state

    currentOperator = null
    shouldReset = true
}

function inputNumbers(value) {
    if (shouldReset) {
        display.textContent = ""
        shouldReset = false
    }

    if (value === "." && display.textContent.includes(".")) {
        return
    }

    display.textContent += value
}

function formatNumber(num) {
    return Math.round(num * 1000) / 1000
}

function deletelastInput() {
    if (shouldReset) return ;

    let current = display.textContent

    if (current === "") return

    display.textContent = current.slice(one, -1)
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
const dot = document.querySelector("#dot")
const del = document.querySelector("#del")

one.addEventListener("click", () => inputNumbers(1))
two.addEventListener("click", () => inputNumbers(2))
three.addEventListener("click", () => inputNumbers(3))
four.addEventListener("click", () => inputNumbers(4))
five.addEventListener("click", () => inputNumbers(5))
six.addEventListener("click", () => inputNumbers(6))
seven.addEventListener("click", () => inputNumbers(7))
eight.addEventListener("click", () => inputNumbers(8))
nine.addEventListener("click", () => inputNumbers(9))
zero.addEventListener("click", () => inputNumbers(0))
dot.addEventListener("click", () => inputNumbers("."))


clear.addEventListener("click", () => {
    display.textContent = "";
    sum = 0;
    shouldReset = false
})


plus.addEventListener("click", () => handleOperator("+"))
minus.addEventListener("click", () => handleOperator("-"))
multiply.addEventListener("click", () => handleOperator("*"))
divide.addEventListener("click", () => handleOperator("/"))
equals.addEventListener("click", () => handleEquals())
del.addEventListener("click", () => deletelastInput())

// keyboard support

document.addEventListener("keydown", handleKeyboard);

function handleKeyboard(e) {
    e.preventDefault()

    const key = e.key

    //numbers
    if (key >= "0" && key <= "9" || key === ".") {
        inputNumbers(key)
    }


    //operators
    if (key === "+") handleOperator("+")
    if (key === "-") handleOperator("-")
    if (key === "*") handleOperator("*")
    if (key === "/") handleOperator("/")

    if (key === "Enter" || key === "=") {
        handleEquals()
    } 

    if (key === "Backspace") {
        deletelastInput()
    }

    if (key === "Escape") {
        display.textContent = "";
        sum = 0
        currentOperator = null
        shouldReset = false
    }

   
}