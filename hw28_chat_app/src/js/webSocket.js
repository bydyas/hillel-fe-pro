import { insertAvatar } from './genAvatars.js'

export let ws = new WebSocket('wss://fep-app.herokuapp.com/');

const STATUS_WS = document.querySelector('.connect-status'),
    MSG_TEMPLATE = document.querySelector('#msgTemplate').textContent,
    MSG_CONTAINER = document.querySelector('.get-messages-container'),
    RECONNECT_CHECKBOX = document.querySelector('#autoConnectBtn'),
    INPUT_MSG = document.querySelector('#input-msg'),
    BTN_SEND_MSG = document.querySelector('#send-msg-btn');


RECONNECT_CHECKBOX.addEventListener('change', function () {
    /* if (this.checked) {
        ws.onclose = () => {
            console.log('Recconecting...');
            ws = new WebSocket('wss://fep-app.herokuapp.com/');
            changeStatus();
        }
    } else {
        ws.onclose = () => {
            console.log('Server is closed.');
            changeStatus();
        }
    } */
})

ws.onclose = () => {
    console.log('Recconecting...');
    ws = new WebSocket('wss://fep-app.herokuapp.com/');
    changeStatus();
}

BTN_SEND_MSG.onclick = () => {
    if (INPUT_MSG.value != '') {
        sendMessage(INPUT_MSG.value);
    }
    else console.log('Fill the place');
}

function sendMessage(msg) {
    ws.send(JSON.stringify({
        type: "message", payload: {
            username: localStorage.getItem('username'),
            message: msg
        }
    }));
}

function changeStatus() {
    if (ws.readyState === 1) {
        STATUS_WS.textContent = 'online';
        STATUS_WS.classList.add('online');
    } else {
        STATUS_WS.textContent = 'offline';
        STATUS_WS.classList.add('offline');
    }
}

ws.onopen = () => {
    console.log('Server is opened.');
    changeStatus();
}

ws.onmessage = parseResponse;
function parseResponse(event) {
    const { type, payload } = JSON.parse(event.data);

    if (type === 'message') {
        let html = MSG_TEMPLATE.replace('{{payload.message}}', payload.message).replace('{{payload.username}}', payload.username);
        if (payload.username === localStorage.getItem('username')) {
            html = MSG_TEMPLATE.replace('{{payload.message}}', payload.message)
                            .replace('{{payload.username}}', payload.username)
                            .replace('{{is-mine}}', 'is-mine');
        }
        MSG_CONTAINER.insertAdjacentHTML('beforeend', html);
        //insertAvatar('#msg-holder', 'afterbegin', '.group-name');
    }
}