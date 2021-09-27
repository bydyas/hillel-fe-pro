import '../css/normalize.css'
import '../css/fonts.css'
import '../css/styles.css'
import '../css/weather.css'
import '../css/clock.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { renderData } from '../js/weather.js'
import { Clock } from '../js/clock.js'

new Clock({
    time: 'h:m:s',
    date: 'd/m/y'
}).start();