const counterDefValue = document.querySelector('#counterDefaultValue').value;

function count(val) {
    return function () {
       return val++;
    }
}
const c = count(counterDefValue + 1);

function createCounterNode() {
    let li = document.createElement('li');
    li.classList.add('counter');

    let span = document.createElement('span');
    span.setAttribute('id', 'counterCurrentValue');
    span.textContent = counterDefValue;

    let btn = document.createElement('button');
    btn.setAttribute('id', 'countBtn');
    btn.textContent = 'Count';

    btn.onclick = () => {
        span.textContent = c();
    };

    li.append(span);
    li.append(btn);
    document.querySelector('.counter-container').append(li);
}

document.querySelector('#createCounterBtn').onclick = createCounterNode;

function arrayFill(filler, amount) {
    let arr = [];

    for (let i = 0; i < amount; i++) {
        arr.push(filler);
    }

    return arr;
}
console.log(arrayFill('x', 5)); // ["x", "x", "x", "x", "x"]

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