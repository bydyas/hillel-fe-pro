const tdRevenueValues = document.querySelectorAll('td[data-id="revenue-value"]');
const totalRevenue = document.querySelector('#summ');

function calcTotalRevenue(listOfAbbreviatedNums, total) {
    let sum = 0;

    Array.from(listOfAbbreviatedNums).forEach(value => {
        let abbNum = value.textContent;

        if (abbNum[abbNum.length - 1] === 'M') { 
            sum += (parseInt(abbNum) * 10 ** 6);
        } else if (abbNum[abbNum.length - 1] === 'B') {
            sum += (parseInt(abbNum) * 10 ** 9);
        } else {
            sum += (parseInt(abbNum));
        }
    });

    total.textContent = 'Total:' + sum;
}
calcTotalRevenue(tdRevenueValues, totalRevenue);