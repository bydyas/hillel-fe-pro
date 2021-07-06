let num = +prompt("Enter a digit num:", "");

function outputDigitNum(n) {
    if (n === 1) return n;
    else return outputDigitNum(n - 1) + " " + n;
}
console.log(outputDigitNum(num));

function sumNumRecursion(strOfNum) {
    let sum = 0;
    strOfNum.split(" ").forEach(numbers => {
        sum += +numbers;
    });
    console.log(`Сумма чисел: ${sum}`);
}
sumNumRecursion(outputDigitNum(num));