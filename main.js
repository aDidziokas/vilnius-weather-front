const api = {
    baseurl: "http://127.0.0.1:8081/vilnius-weather/now"
}

window.onload = function getResults () {
    fetch(`${api.baseurl}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather){
    let date = document.querySelector('.location .date');
    date.innerText = Date(`${weather.hourProvided},`)

    let temp = document.querySelector('.current .temp');
    temp.innerText = `${weather.temperature}`
}