// Task #1
function changeText(newText) {
    const date = document.querySelector('span');
    date.textContent = newText;
}
changeText('2020');

// Task #2
function deleteAttribute(attr) {
    const nodeAttr = document.querySelector(`[${attr}]`);
    nodeAttr.removeAttribute(attr);
}
deleteAttribute('my-attribute');

// Task #3
function setBackgroundForDataId(color) {
    const dataIdCells = document.querySelectorAll('[data-id]');
    Array.from(dataIdCells).forEach(cell => cell.style.backgroundColor = color);
}
setBackgroundForDataId('green');

// Task #4
function addNewRow(company, contact, revenue) {
    const tbody = document.querySelector('tbody');
    const newRow = document.createElement('tr');

    const companyTd = document.createElement('td');
    companyTd.textContent = company;
    newRow.appendChild(companyTd);
    
    const contactTd = document.createElement('td');
    contactTd.textContent = contact;
    newRow.appendChild(contactTd);
    
    const revenueTd = document.createElement('td');
    revenueTd.textContent = revenue;
    newRow.appendChild(revenueTd);

    tbody.insertBefore(newRow, tbody.lastElementChild);
}
addNewRow('Tesla Inc', 'Elon Musk', '31B');

// Task #5
function removeFirstRow() {
    const rowCollection = document.querySelectorAll('table tr');
    if (rowCollection[1] !== rowCollection[rowCollection.length - 1]) rowCollection[1].remove();
}
removeFirstRow();