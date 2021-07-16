const inputNewItem = document.querySelector('#inputNewItem');
const btnAddNewItem = document.querySelector('#btnAddNewItem');
const toDoListContainer = document.querySelector('#toDoListContainer');
let counter = 0;

function createNewItem(input, parent) {
    const itemsLimit = 10; // mutable
    const lenLimit = 35; // mutable
    let str = input.value;

    if (str.replace(/\s/g, '').length && str !== '' && str.length < lenLimit && counter < itemsLimit) {

        let newItem = document.createElement('li');
        newItem.classList.add('new-item');
        newItem.innerHTML = '<span>' + str + '</span>';
        newItem.onclick = () => {
            newItem.classList.toggle('is-completed');
        };

        let binBtn = document.createElement('span');
        binBtn.classList.add('close-x');
        binBtn.onclick = () => {
            binBtn.parentNode.remove();
            counter--;
        };

        newItem.append(binBtn);
        parent.append(newItem);
        counter++;
    }

    input.value = '';
}

btnAddNewItem.onclick = (e) => {
    e.preventDefault();
    createNewItem(inputNewItem, toDoListContainer);
};

// To animate the pseudo of #form by focusing input el;
inputNewItem.addEventListener('focus', () => {
    document.querySelector('#form').classList.add('is-focused-to-anim');
});

inputNewItem.addEventListener('blur', () => {
    document.querySelector('#form').classList.remove('is-focused-to-anim');
});