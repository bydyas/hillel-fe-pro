let numberOne = +prompt("Enter the first number", "");
let numberTwo = +prompt("Enter the second number", "");
let userOperator = prompt("Choose the mathematical operator:\n+ (add), - (sub), * (mult), / (div), % (mod)", "");
let result;

function addNum(x, y) {
    return x + y;
}

function subNum(x, y) {
    return x - y;
}

function multNum(x, y) {
    return x * y;
}

function divNum(x, y) {
    return x / y;
}

function modNum(x, y) {
    return x % y;
}

if (userOperator) {
    if (userOperator === "+" || userOperator === "add") result = addNum(numberOne, numberTwo);
    if (userOperator === "-" || userOperator === "sub") result = subNum(numberOne, numberTwo);
    if (userOperator === "*" || userOperator === "mult") result = multNum(numberOne, numberTwo);
    if (userOperator === "/" || userOperator === "div") result = divNum(numberOne, numberTwo);
    if (userOperator === "%" || userOperator === "mod") result = modNum(numberOne, numberTwo);
}

if (!result) {
    alert("Something went wrong...\nEnter properly the values!");
} else {
    alert(`${numberOne} ${userOperator} ${numberTwo} = ${result}`);
}