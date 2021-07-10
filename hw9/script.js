const tdRevenueValues = document.querySelectorAll('td[data-id="revenue-value"]');
const totalRevenue = document.querySelector('#summ');

function convertToLongNum(listOfAbbreviatedNums) {
    let convertedNums = [];

    Array.from(listOfAbbreviatedNums).forEach(value => {
        let abbNum = value.textContent;

        if (abbNum[abbNum.length - 1] === 'M') { 
            convertedNums.push(parseInt(abbNum) * 10 ** 6);
        } else if (abbNum[abbNum.length - 1] === 'B') {
            convertedNums.push(parseInt(abbNum) * 10 ** 9);
        } else {
            convertedNums.push(parseInt(abbNum));
        }
    });

    return convertedNums;
}

function calcTotalRevenue(arrOfNums, total) {
    let sum = 0;

    arrOfNums.forEach(num => {
        sum += num;
    });

    total.textContent = 'Total:' + sum;
}
calcTotalRevenue(convertToLongNum(tdRevenueValues), totalRevenue);