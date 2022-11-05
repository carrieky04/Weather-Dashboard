var searchBtn = document.querySelector('#search-btn');
var currentWeather = document.querySelector('.container-fluid');
var fiveDayWeather = document.querySelector('.d-flex');

// console.log('test1')
function getWeather(event) {
    event.preventDefault();
    var inputEl = document.querySelector('#exampleFormControlInput1');
    var cityName = inputEl.value;

    // console.log("in getAPI()");
    
    var requestCity = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=3&appid=7dd3c97591974f9fd579b18818499b7c"
    fetch(requestCity)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            console.log(lat)
            console.log(lon);
            var requestLatLon = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=7dd3c97591974f9fd579b18818499b7c&units=imperial";
                fetch(requestLatLon)
                    .then(function (response) {
                        return response.json();
                    })
                    .then (function (data) {
                        console.log(data);
                        forecast = data;
                        // var temp = weather.list[0].main.temp
                        // console.log(temp)
                        displayCurrentWeather(forecast);
                        
                    })                   
        })  
}

searchBtn.addEventListener("click", getWeather);

function displayCurrentWeather (forecast) {
    var name = forecast.city.name
    var date = forecast.list[0].dt_txt;
    var newDate = moment(date).format("MMMM Do YYYY");
    var icon = forecast.list[0].weather[0].icon
    var temp = forecast.list[0].main.temp
    var wind = forecast.list[0].wind.speed
    var humidity = forecast.list[0].main.humidity
     console.log(name,date,icon,temp,wind,humidity);

     var nameText = document.createElement('div');
     nameText.innerHTML = 
        name + '<br/>';
     currentWeather.append(nameText);

     var dateText = document.createElement('div');
     dateText.innerHTML = 
        newDate + '<br/>';
     currentWeather.append(dateText);

     var image = document.createElement('img');
    image.src = 'http://openweathermap.org/img/w/' + icon + '.png';
    currentWeather.append(image);

     var tempText = document.createElement('div');
     tempText.innerHTML = 
     '<strong>Temp: </strong> ' + temp + '&#8457' + '<br/>';
     currentWeather.append(tempText);

     var windText = document.createElement('div');
     windText.innerHTML = 
     '<strong>Wind: </strong> ' + wind + 'mph' + '<br/>';
     currentWeather.append(windText);

     var humidityText = document.createElement('div');
     humidityText.innerHTML = 
     '<strong>Humidity: </strong> ' + humidity + '&#37' + '<br/>';
     currentWeather.append(humidityText);

     currentWeather.style.display = 'block';

    displayDayTwo(forecast);

}

function displayDayTwo(forecast) {
    var name = forecast.city.name
    var date = forecast.list[8].dt_txt
    var newDate = moment(date).format("MMMM Do YYYY")
    var icon = forecast.list[8].weather[0].icon
    var temp = forecast.list[8].main.temp
    var wind = forecast.list[8].wind.speed
    var humidity = forecast.list[8].main.humidity
     console.log(name,date,icon,temp,wind,humidity);

    var forecastCard = document.createElement('div');
    forecastCard.classList.add('card','bg-dark', 'text-light', 'mb-3', 'p-3')
    fiveDayWeather.append(forecastCard);


     var dateText = document.createElement('div');
     dateText.innerHTML = 
     '<strong>Date: </strong> ' + newDate + '<br/>';
     forecastCard.append(dateText);

    var image = document.createElement('img');
    image.src = 'http://openweathermap.org/img/w/' + icon + '.png';
    forecastCard.append(image);

     var tempText = document.createElement('div');
     tempText.innerHTML = 
     '<strong>Temp: </strong> ' + temp + '&#8457' + '<br/>';
     forecastCard.append(tempText);

     var windText = document.createElement('div');
     windText.innerHTML = 
     '<strong>Wind: </strong> ' + wind + 'mph' + '<br/>';
     forecastCard.append(windText);

     var humidityText = document.createElement('div');
     humidityText.innerHTML = 
     '<strong>Humidity: </strong> ' + humidity + '&#37' + '<br/>';
     forecastCard.append(humidityText);

     fiveDayWeather.style.display = 'flex';

     displayDayThree(forecast);
}

function displayDayThree(forecast) {
    var name = forecast.city.name
    var date = forecast.list[16].dt_txt
    var newDate = moment(date).format("MMMM Do YYYY");
    var icon = forecast.list[16].weather[0].icon
    var temp = forecast.list[16].main.temp
    var wind = forecast.list[16].wind.speed
    var humidity = forecast.list[16].main.humidity
     console.log(name,date,icon,temp,wind,humidity);

    var forecastCard = document.createElement('div');
    forecastCard.classList.add('card','width:18rem', 'bg-dark', 'text-light', 'mb-3', 'p-3')
    fiveDayWeather.append(forecastCard);


     var dateText = document.createElement('div');
     dateText.innerHTML = 
     '<strong>Date: </strong> ' + newDate + '<br/>';
     forecastCard.append(dateText);

     var image = document.createElement('img');
    image.src = 'http://openweathermap.org/img/w/' + icon + '.png';
    forecastCard.append(image);

     var tempText = document.createElement('div');
     tempText.innerHTML = 
     '<strong>Temp: </strong> ' + temp + '&#8457' + '<br/>';
     forecastCard.append(tempText);

     var windText = document.createElement('div');
     windText.innerHTML = 
     '<strong>Wind: </strong> ' + wind + 'mph' + '<br/>';
     forecastCard.append(windText);

     var humidityText = document.createElement('div');
     humidityText.innerHTML = 
     '<strong>Humidity: </strong> ' + humidity + '&#37' + '<br/>';
     forecastCard.append(humidityText);

     displayDayFour(forecast);
}

function displayDayFour(forecast) {
    var name = forecast.city.name
    var date = forecast.list[24].dt_txt
    var newDate = moment(date).format("MMMM Do YYYY");
    var icon = forecast.list[24].weather[0].icon
    var temp = forecast.list[24].main.temp
    var wind = forecast.list[24].wind.speed
    var humidity = forecast.list[24].main.humidity
     console.log(name,date,icon,temp,wind,humidity);

    var forecastCard = document.createElement('div');
    forecastCard.classList.add('card','width:18rem', 'bg-dark', 'text-light', 'mb-3', 'p-3')
    fiveDayWeather.append(forecastCard);


     var dateText = document.createElement('div');
     dateText.innerHTML = 
     '<strong>Date: </strong> ' + newDate + '<br/>';
     forecastCard.append(dateText);

     var image = document.createElement('img');
    image.src = 'http://openweathermap.org/img/w/' + icon + '.png';
    forecastCard.append(image);

     var tempText = document.createElement('div');
     tempText.innerHTML = 
     '<strong>Temp: </strong> ' + temp + '&#8457' + '<br/>';
     forecastCard.append(tempText);

     var windText = document.createElement('div');
     windText.innerHTML = 
     '<strong>Wind: </strong> ' + wind + 'mph' + '<br/>';
     forecastCard.append(windText);

     var humidityText = document.createElement('div');
     humidityText.innerHTML = 
     '<strong>Humidity: </strong> ' + humidity + '&#37' + '<br/>';
     forecastCard.append(humidityText);

     displayDayFive(forecast);
}

function displayDayFive(forecast) {
    var name = forecast.city.name
    var date = forecast.list[32].dt_txt
    var newDate = moment(date).format("MMMM Do YYYY")
    var icon = forecast.list[32].weather[0].icon
    var temp = forecast.list[32].main.temp
    var wind = forecast.list[32].wind.speed
    var humidity = forecast.list[32].main.humidity
     console.log(name,date,icon,temp,wind,humidity);

    var forecastCard = document.createElement('div');
    forecastCard.classList.add('card','width:18rem', 'bg-dark', 'text-light', 'mb-3', 'p-3')
    fiveDayWeather.append(forecastCard);


     var dateText = document.createElement('div');
     dateText.innerHTML = 
     '<strong>Date: </strong> ' + newDate + '<br/>';
     forecastCard.append(dateText);

     var image = document.createElement('img');
    image.src = 'http://openweathermap.org/img/w/' + icon + '.png';
    forecastCard.append(image);

     var tempText = document.createElement('div');
     tempText.innerHTML = 
     '<strong>Temp: </strong> ' + temp + '&#8457' + '<br/>';
     forecastCard.append(tempText);

     var windText = document.createElement('div');
     windText.innerHTML = 
     '<strong>Wind: </strong> ' + wind + 'mph' + '<br/>';
     forecastCard.append(windText);

     var humidityText = document.createElement('div');
     humidityText.innerHTML = 
     '<strong>Humidity: </strong> ' + humidity + '&#37' + '<br/>';
     forecastCard.append(humidityText);

     displayDaySix(forecast);
}

function displayDaySix(forecast) {
    var name = forecast.city.name
    var date = forecast.list[39].dt_txt
    var newDate = moment(date).format("MMMM Do YYYY")
    var icon = forecast.list[39].weather[0].icon
    var temp = forecast.list[39].main.temp
    var wind = forecast.list[39].wind.speed
    var humidity = forecast.list[39].main.humidity
     console.log(name,date,icon,temp,wind,humidity);

    var forecastCard = document.createElement('div');
    forecastCard.classList.add('card','width:18rem', 'bg-dark', 'text-light', 'mb-3', 'p-3')
    fiveDayWeather.append(forecastCard);


     var dateText = document.createElement('div');
     dateText.innerHTML = 
     '<strong>Date: </strong> ' + newDate + '<br/>';
     forecastCard.append(dateText);

     var image = document.createElement('img');
    image.src = 'http://openweathermap.org/img/w/' + icon + '.png';
    forecastCard.append(image);

     var tempText = document.createElement('div');
     tempText.innerHTML = 
     '<strong>Temp: </strong> ' + temp + '&#8457' + '<br/>';
     forecastCard.append(tempText);

     var windText = document.createElement('div');
     windText.innerHTML = 
     '<strong>Wind: </strong> ' + wind + 'mph' + '<br/>';
     forecastCard.append(windText);

     var humidityText = document.createElement('div');
     humidityText.innerHTML = 
     '<strong>Humidity: </strong> ' + humidity + '&#37' + '<br/>';
     forecastCard.append(humidityText);

}






