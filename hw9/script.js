const tdRevenueValues = document.querySelectorAll('td[data-id="revenue-value"]');
const totalRevenue = document.querySelector('#summ');

function convertToLongNum(nodeListOfShortNum) {
    let convertedNums = [];

    Array.from(nodeListOfShortNum).forEach(value => {
        let num = value.textContent;

        if (num[num.length - 1] === 'M') { 
            convertedNums.push(parseInt(num) * 10 ** 6);
        } else if (num[num.length - 1] === 'B') {
            convertedNums.push(parseInt(num) * 10 ** 9);
        } else {
            convertedNums.push(parseInt(num));
        }
    });

    return convertedNums;
}

function calcTotalRevenue(arrOfNums, total) {
    let sum = 0;

    arrOfNums.forEach(num => {
        sum += +num;
    });
    
    total.textContent = 'Total:' + sum;
}
calcTotalRevenue(convertToLongNum(tdRevenueValues), totalRevenue);