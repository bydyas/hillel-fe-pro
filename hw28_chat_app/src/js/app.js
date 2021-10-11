import '../css/normalize.css'
import '../css/fonts.css'
import '../css/styles.css'
import '../css/weather.css'
import '../css/clock.css'
import '../css/messages.css'
import '../css/scrollbar.css'
import '../css/login.css'
import '../css/dark-theme.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { renderData } from '../js/weather.js'
import { Clock } from '../js/clock.js'
import { theme } from '../js/theme.js'
import { ws } from '../js/webSocket.js'
import { init } from '../js/login.js'
import { insertAvatar } from './genAvatars.js'

//  generates a random pic as avatar based on seed
insertAvatar('.user-bio', 'afterbegin', '.user-name');
insertAvatar('.group-info', 'afterbegin', '.group-name');

// generates data & time and insert to document
new Clock({
    time: 'h:m:s',
    date: 'd/m/y'
}).start();
