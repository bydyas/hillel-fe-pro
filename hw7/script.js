do {
    var num = +prompt("Enter a digit num:", "");
} while(isNaN(num))

function outputDigitNum(n) {
    if (n === 1) return n;
    else return outputDigitNum(n - 1) + " " + n;
}
console.log(outputDigitNum(num));

function sumDigitNum(strOfNum) {
    let sum = 0;
    strOfNum.split(" ").forEach(numbers => {
        sum += +numbers;
    });
    console.log(`Сумма чисел: ${sum}`);
}
sumDigitNum(outputDigitNum(num));