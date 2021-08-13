window.addEventListener('DOMContentLoaded', () => {

    const storageType = localStorage;
    const consentPropertyType = 'site_consent';

    const hasConsented = () => storageType.getItem(consentPropertyType) === 'true' ? true : false;
    const toggleStorage = (prop) => storageType.setItem(consentPropertyType, prop);

    const popup = document.querySelector('.cookie-popup');

    const btnConfirm = document.querySelector('#cookieConfirm'),
          btnCancel = document.querySelector('#cookieCancel'),
          btnLogin = document.querySelector('#loginBtn');

    if (hasConsented()) {
        //actions
        showWelcomePopUp();
    } else {
        popup.classList.add('active');
    }

    btnConfirm.addEventListener('click', () => {
        toggleStorage(true);
        popup.classList.remove('active');
        // actions
        setUserLoginByStorage();
    });

    btnCancel.addEventListener('click', () => {
        toggleStorage(false);
        popup.classList.remove('active');
        // actions
        setUserLoginByDefault();
    });

    function setUserLoginByStorage() {
        btnLogin.addEventListener('click', () => {
            storageType.setItem('user_login', document.querySelector('#inputUserLogin').value);
            showWelcomePopUp();
        });
    }

    function setUserLoginByDefault() {
        btnLogin.addEventListener('click', () => {
            let userNameSpan = document.querySelector('#user-name');
            userNameSpan.textContent = document.querySelector('#inputUserLogin').value;
            showWelcomePopUp();
        });
    }

    function showWelcomePopUp() {
        if (storageType['user_login']) {
            let userNameSpan = document.querySelector('#user-name');
            userNameSpan.textContent = storageType['user_login'];
        }

        document.querySelector('.welcome-popup').classList.toggle('is-hidden');
        document.querySelector('.wrapper').classList.toggle('is-hidden');
    }

    // Close welcome popup
    document.querySelector('.btn-drive').addEventListener('click', () => {
        document.querySelector('.welcome-popup').classList.add('is-hidden');
    });

    // Error message when clicked loginBtn without localstorage
    document.querySelector('#loginBtn').addEventListener('click', () => {
        document.querySelector('#error-alert').style.color = '#CC0000';
    });

});