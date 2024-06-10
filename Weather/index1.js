var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "5ff28c704e09d7811d58f5f641a475ab";

function convertion(val) {
    return (val - 273.15).toFixed(3); // 273.15 for Kelvin to Celsius conversion
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data.name;
        var descrip = data.weather[0].description;
        var temperature = data.main.temp;
        var windspeed = data.wind.speed;

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${convertion(temperature)}°C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
        wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
    })
    .catch(err => alert('You entered a wrong city name'));
});
