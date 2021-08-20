const TODOS_TEMPLATE = document.querySelector("#todosTemplate").innerHTML;
const TODOS_CONTAINER = document.querySelector("#todosContainer");
const TODOS_AMOUNT_TO_SHOW = 100; // configure by yourself
const BTN_ADD_TODO = document.querySelector("#btnAddNewItem");


window.addEventListener('DOMContentLoaded', getData, false);

TODOS_CONTAINER.addEventListener('click', (e) => {
    changeStatus(e);
    deleteTodo(e);
}, false);

BTN_ADD_TODO.addEventListener('click', sendData, false);


function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(todos => handleData(todos))
        .catch(error => console.log(error));
}

function handleData(todos) {
    for (let i = 0; i < TODOS_AMOUNT_TO_SHOW; i++) {
        renderData(todos[i]);
    }
}

function checkDefaultStatus(todo, html) {
    if (todo.completed) {
        html = html.replace("todo-item", "todo-item is-completed");
    }
    return html;
}

function renderData(todo) {
    let html = TODOS_TEMPLATE.replace("{{title}}", todo.title).replace("{{id}}", todo.id);
    TODOS_CONTAINER.insertAdjacentHTML("beforeend", checkDefaultStatus(todo, html));
}

function changeStatus(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('is-completed');
    }
    // send to server
}

function deleteTodo(e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentNode.remove();
    }
    // send to server
}

// fake request
function sendData() {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: false
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .catch(error => console.log(error))
        .finally(getData());
}

// To animate the pseudo of #form by focusing input el;
document.querySelector('#inputNewItem').addEventListener('focus', () => {
    document.querySelector('#form').classList.add('is-focused-to-anim');
});

document.querySelector('#inputNewItem').addEventListener('blur', () => {
    document.querySelector('#form').classList.remove('is-focused-to-anim');
});