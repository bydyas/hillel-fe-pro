function recurse(n) {
    if (n === 1) return n;
    else return n + " " + recurse(n - 1);
}
console.log(recurse(5).split(" ").reverse().join(" "));

function sumNumRecursion(rec) {
    let sum = 0;
    rec.split(" ").forEach(numbers => {
        sum += +numbers;
    });
    console.log(`Сумма чисел: ${sum}`);
}
sumNumRecursion(recurse(5));