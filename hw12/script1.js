const removeAttrBtn = document.querySelector('#removeAttrBtn');
const setGreenBtn = document.querySelector('#setGreenBtn');
const addRowBtn = document.querySelector('#addRowBtn');
const removeSecondRowBtn = document.querySelector('#removeSecondRowBtn');
const tdRevenueValues = document.querySelectorAll('td[data-id="revenue-value"]');
const totalRevenue = document.querySelector('#summ');

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    title.classList.add('title-size');
});

function load() {
    removeAttrBtn.addEventListener('click', removeAttr, false);
    setGreenBtn.addEventListener('click', setGreenBg, true);
    addRowBtn.addEventListener('click', addRow, false);
    removeSecondRowBtn.addEventListener('click', removeSecRow, false);
}

function setYear() {
    const inputYear = document.querySelector('.form-control');
    const currentYear = document.querySelector('#title span');
    if (inputYear.value !== '' && inputYear.value.length === 4 && inputYear.value.replace(/\s/g, '').length) {
        currentYear.textContent = inputYear.value;
    }
}

function addRow() {
    const companyName = 'no data found';
    const contactName = 'no data found';
    const revenueValue = 'no data found';

    const tbody = document.querySelector('tbody');
    const newRow = document.createElement('tr');

    const companyTd = document.createElement('td');
    companyTd.textContent = companyName;
    newRow.appendChild(companyTd);
    
    const contactTd = document.createElement('td');
    contactTd.textContent = contactName;
    newRow.appendChild(contactTd);
    
    const revenueTd = document.createElement('td');
    revenueTd.textContent = revenueValue;
    revenueTd.setAttribute('data-id', 'revenue-value');
    newRow.appendChild(revenueTd);

    tbody.insertBefore(newRow, tbody.lastElementChild);
}

function removeAttr() {
    const nodeAttr = document.querySelector(`[my-attribute]`);
    if (nodeAttr) nodeAttr.removeAttribute('my-attribute');
}

function removeSecRow() {
    const rowCollection = document.querySelectorAll('table tr');
    if (rowCollection[2] !== rowCollection[rowCollection.length - 1]) rowCollection[2].remove();
}

function setGreenBg(e) {
    e.stopPropagation();

    const dataIdCells = document.querySelectorAll('[data-id]');
    Array.from(dataIdCells).forEach(cell => {
      /* if (cell.textContent !== 'no data found') */ cell.classList.add('green-bg');
    });
}

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