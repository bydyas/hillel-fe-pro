const WEATHER_CITY = document.querySelector(".input-weather");
const CONFIG = {
    key: "f9973fd6345f17cc2ab87535eac0f145",
    city: "Odessa",
    lang: "en",
}

window.addEventListener('DOMContentLoaded', getData(CONFIG.city, CONFIG.key, CONFIG.lang, CONFIG.units));

WEATHER_CITY.addEventListener('change', (e) => {
    if (WEATHER_CITY.value) {
        setCity(WEATHER_CITY.value);
        getData(CONFIG.city, CONFIG.key, CONFIG.lang, CONFIG.units);
    }
    WEATHER_CITY.value = "";
});

function setCity(newCity) {
    CONFIG.city = newCity;
}

async function getData(city, key, lang) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${lang}`);
    let weather = await response.json();
    renderData(weather);
}

function convertToCelsius(K) {
    return Math.round((K - 273.15) * 10) / 10 + " ℃";
}

export function renderData(data) {
    document.querySelector('#w-country').textContent = data["sys"].country;
    document.querySelector('#w-city').textContent = data.name + ",";
    document.querySelector('#w-temp').textContent = convertToCelsius(data["main"].temp);
    document.querySelector('#w-wind').textContent = data["wind"].speed + " m/s";
    document.querySelector('#w-icon').src = `http://openweathermap.org/img/wn/${data["weather"][0].icon}@2x.png`;
    document.querySelector('#w-icon-caption').textContent = data["weather"][0].description;
}