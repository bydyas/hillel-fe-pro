const USER_NAME = document.querySelector('.login-input-user-name');
const BTN_LOGIN = document.querySelector('.btn-login');
const LOGIN_HOLDER = document.querySelector('#login');

export const init = BTN_LOGIN.onclick = () => {
    if (USER_NAME != '') checkInStorage(USER_NAME.value);
}

function checkInStorage(user) {
    if (localStorage.getItem('username') === user) {
        console.log('Got one');
        updateName(user);
    }
    else {
        localStorage.setItem('username', user);
        console.log('New one');
        updateName(user);
    }
}

function updateName(user) {
    LOGIN_HOLDER.classList.toggle('hidden');
    document.querySelector('.user-name').textContent = user;
}