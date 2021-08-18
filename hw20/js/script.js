const ITEM_NAME = document.querySelector('#itemName').value;
const ITEM_AMOUNT = document.querySelector('#itemAmount').value;
const ITEM_PRICE = document.querySelector('#itemPrice').value;
const ITEM_ADD_BTN = document.querySelector('.btn');
const TABLE = document.querySelector('#totalPriceRow');

ITEM_ADD_BTN.addEventListener('click', (e) => {
    e.preventDefault();

    if (checkInputs()) {
        addItem();
    }
});

function addItem() {
    TABLE.insertAdjacentHTML('beforebegin', createRow());
}

function checkInputs() {
    // conditions will be
    return true;
}

function createRow() {
    const html = `<tr>
                    <td>${ITEM_NAME}</td>
                    <td>${ITEM_AMOUNT}</td>
                    <td>${ITEM_PRICE}</td>
                    <td><button>DELETE</button></td>
                  </tr>`;
    return html;
}