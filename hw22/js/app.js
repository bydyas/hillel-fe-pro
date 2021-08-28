const WEATHER_CITY = document.querySelector(".input");
const CONFIG = {
    key: "f9973fd6345f17cc2ab87535eac0f145", // unmutable!
    city: "Bilbao", // by default
    lang: "en",
    units: "standard" // standard(K), metric(C), imperial(F)
}

window.addEventListener('DOMContentLoaded', getData(CONFIG.city, CONFIG.key, CONFIG.lang, CONFIG.units));

WEATHER_CITY.addEventListener('change', () => {
    if (WEATHER_CITY.value) {
        setCity(WEATHER_CITY.value);
        getData(CONFIG.city, CONFIG.key, CONFIG.lang, CONFIG.units);
    }
    WEATHER_CITY.value = "";
});

function setCity(newCity) {
    CONFIG.city = newCity;
}

function getData(city, key, lang, units) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${lang}&units=${units}`)
        .then(res => res.json())
        .then(json => renderData(json))
        .catch(error => console.log(error));
}

function convertToCelsius(K) {
    return Math.round((K- 273.15) * 10) / 10 + " ℃";
}

function renderData(data) {
    document.querySelector('#w-country').textContent = data["sys"].country;
    document.querySelector('#w-city').textContent = data.name + ",";
    document.querySelector('#w-temp').textContent = convertToCelsius(data["main"].temp);
    document.querySelector('#w-wind').textContent = data["wind"].speed + " m/c";
    document.querySelector('#w-icon').src = `http://openweathermap.org/img/wn/${data["weather"][0].icon}@2x.png`;
    document.querySelector('#w-icon-caption').textContent = data["weather"][0].description;
}