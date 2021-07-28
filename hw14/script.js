// Task #3
document.querySelector('#createCounterBtn').onclick = () => {
    let counterDefaultValue = document.querySelector('#counterDefaultValue').value;
    const activeCounter = count();

    function count() {
        let counter = counterDefaultValue;
        return function () {
            return ++counter;
        }
    }

    if (!isNaN(+counterDefaultValue) && counterDefaultValue.replace(/\s/g, '').length) {

        const li = document.createElement('li');
        li.classList.add('counter');

        const span = document.createElement('span');
        span.setAttribute('id', 'counterCurrentValue');
        span.textContent = counterDefaultValue;

        const btn = document.createElement('button');
        btn.setAttribute('id', 'countBtn');
        btn.textContent = 'Count';
        btn.onclick = (e) => {
            e.stopPropagation();
            span.textContent = activeCounter();
        };

        li.append(span, btn);
        document.querySelector('.counter-container').append(li);

    }
}

// Task #1
function arrayFill(filler, amount) {
    let arr = [];

    for (let i = 0; i < amount; i++) {
        arr.push(filler);
    }

    return arr;
}
console.log(arrayFill('x', 5)); // ["x", "x", "x", "x", "x"]

// Task #2
function sumOfArr2D(arr) {
    let sum = 0;
    arr.forEach(num => {
        if (Array.isArray(num)) {
            num.forEach(item => sum += item);
        } else {
            sum += num;
        }
    });

    return sum;
}
console.log(sumOfArr2D([[1, 2, 3], [4, 5], [6]])); // 21

function newSumOfArr2D(arr2d) {
    const arr = arr2d.flat();
    const res = arr.reduce((sum, num) => {
        return sum + num;
    }, 0);
    return res;
}
console.log(newSumOfArr2D([[1, 2, 3], [4, 5], [6]])); // 21