window.addEventListener('DOMContentLoaded', () => {

    class CookieConsent {

        cookieExpiresTime = { expires: new Date(Date.now() + 86400e3 * 365).toUTCString() };

        constructor({ name, popup, btnConfirm, btnCancel, activeClass = '' } = {}) {
            this.popup = document.querySelector(popup);
            this.btnConfirm = document.querySelector(btnConfirm);
            this.btnCancel = document.querySelector(btnCancel);
            this.activeClass = activeClass;
            this.consentPropertyType = name;
        }

        getItem(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        setItem(name, value, options = {}) {

            options = {
                path: '/',
                ...options
            };

            if (options.expires instanceof Date) {
                options.expires = options.expires.toUTCString();
            }

            let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

            for (let optionKey in options) {
                updatedCookie += "; " + optionKey;
                let optionValue = options[optionKey];
                if (optionValue !== true) {
                    updatedCookie += "=" + optionValue;
                }
            }

            document.cookie = updatedCookie;
        }

        hasConsented() {
            return this.getItem(this.consentPropertyType) === 'true' ? true : false;
        }

        changeStatus(prop) {
            this.setItem(this.consentPropertyType, prop, this.cookieExpiresTime);

            if (this.hasConsented()) {
                // Any 'accept' actions
                document.querySelector('#loginBtn').addEventListener('click', () => {
                    this.setItem('user_login', document.querySelector('#inputUserLogin').value, this.cookieExpiresTime);
                    showWelcomePopUp();
                });

            } else {
                // Any 'decline' actions
                document.querySelector('#loginBtn').addEventListener('click', () => {
                    const inputValue = document.querySelector('#inputUserLogin').value;
                    const userNameSpan = document.querySelector('#user-name');
                    userNameSpan.textContent = inputValue;
                    showWelcomePopUp();
                });
            }
        }

        bindTriggers() {
            this.btnConfirm.addEventListener('click', () => {
                this.changeStatus(true);
                this.popup.classList.remove(this.activeClass);
            });

            this.btnCancel.addEventListener('click', () => {
                this.changeStatus(false);
                this.popup.classList.remove(this.activeClass);
            });
        }

        init() {
            try {
                if (this.hasConsented()) {
                    showWelcomePopUp();
                } else {
                    this.popup.classList.add(this.activeClass);
                }

                this.bindTriggers();
            } catch (error) {
                console.log('Required all data');
            }
        }

    }

    new CookieConsent({
        name: 'site_consent',
        popup: '.cookie-popup',
        btnConfirm: '#cookieConfirm',
        btnCancel: '#cookieCancel',
        activeClass: 'active'
    }).init();

    function showWelcomePopUp() {
        if (new CookieConsent({}).getItem('user_login')) {
            let userNameSpan = document.querySelector('#user-name');
            userNameSpan.textContent = new CookieConsent({}).getItem('user_login');
        }

        document.querySelector('.welcome-popup').classList.toggle('is-hidden');
        document.querySelector('.wrapper').classList.toggle('is-hidden');
    }

    // Close welcome popup
    document.querySelector('.btn-drive').addEventListener('click', () => {
        document.querySelector('.welcome-popup').classList.add('is-hidden');
    });

    // Error message when clicked loginBtn without cookies
    document.querySelector('#loginBtn').addEventListener('click', () => {
        document.querySelector('#error-alert').style.color = '#CC0000';
    });

});