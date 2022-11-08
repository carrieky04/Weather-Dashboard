var searchBtn = document.querySelector('#search-btn');
var currentWeather = document.querySelector('#hide-current');
var fiveDayWeather = document.querySelector('#fiveDayForecast');
var inputArea = document.querySelector('.form-control');
var savedCities = document.querySelector('.saved-cities');




function getWeather(event) {
    event.preventDefault();
    var inputEl = document.querySelector('#exampleFormControlInput1');
    var cityName = inputEl.value;
    
    var requestCity = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=3&appid=7dd3c97591974f9fd579b18818499b7c"
    fetch(requestCity)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var lat = data[0].lat;
            var lon = data[0].lon;
            var requestLatLon = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=7dd3c97591974f9fd579b18818499b7c&units=imperial";
                fetch(requestLatLon)
                    .then(function (response) {
                        return response.json();
                    })
                    .then (function (data) {
                        forecast = data;
                        displayCurrentWeather(forecast);
                        
                    })                   
        }) 
    saveWeather();
}

searchBtn.addEventListener("click", getWeather);

function displayCurrentWeather (forecast) {
    var name = forecast.city.name
    var date = forecast.list[0].dt_txt;
    var newDate = moment(date).format("MMMM Do YYYY");
    var icon = forecast.list[0].weather[0].icon
    var temp = forecast.list[0].main.temp
    // var newTemp = Math.round(temp);
    var wind = forecast.list[0].wind.speed
    var humidity = forecast.list[0].main.humidity

     var nameText = document.createElement('div');
     nameText.innerHTML = 
        name + '<br/>';
    currentWeather.innerHTML = "";
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
 
    var date = forecast.list[8].dt_txt
    var newDate = moment(date).format("MMMM Do YYYY")
    var icon = forecast.list[8].weather[0].icon
    var temp = forecast.list[8].main.temp
    var wind = forecast.list[8].wind.speed
    var humidity = forecast.list[8].main.humidity

    var headingEL = document.createElement('h3');
    headingEL.innerHTML = '5 Day Weather Forecast:';
    fiveDayWeather.innerHTML = "";
    fiveDayWeather.append(headingEL);

    var forecastCard = document.createElement('div');
    forecastCard.classList.add('card','w-5','bg-dark', 'text-light', 'mb-3', 'p-3')
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
    
    var date = forecast.list[16].dt_txt
    var newDate = moment(date).format("MMMM Do YYYY");
    var icon = forecast.list[16].weather[0].icon
    var temp = forecast.list[16].main.temp
    var wind = forecast.list[16].wind.speed
    var humidity = forecast.list[16].main.humidity

    var forecastCard = document.createElement('div');
    forecastCard.classList.add('card','w-5', 'bg-dark', 'text-light', 'mb-3', 'p-3')
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
    
    var date = forecast.list[24].dt_txt
    var newDate = moment(date).format("MMMM Do YYYY");
    var icon = forecast.list[24].weather[0].icon
    var temp = forecast.list[24].main.temp
    var wind = forecast.list[24].wind.speed
    var humidity = forecast.list[24].main.humidity

    var forecastCard = document.createElement('div');
    forecastCard.classList.add('card','w-5', 'bg-dark', 'text-light', 'mb-3', 'p-3')
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
    
    var date = forecast.list[32].dt_txt
    var newDate = moment(date).format("MMMM Do YYYY")
    var icon = forecast.list[32].weather[0].icon
    var temp = forecast.list[32].main.temp
    var wind = forecast.list[32].wind.speed
    var humidity = forecast.list[32].main.humidity

    var forecastCard = document.createElement('div');
    forecastCard.classList.add('card','w-5', 'bg-dark', 'text-light', 'mb-3', 'p-3')
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
   
    var date = forecast.list[39].dt_txt
    var newDate = moment(date).format("MMMM Do YYYY")
    var icon = forecast.list[39].weather[0].icon
    var temp = forecast.list[39].main.temp
    var wind = forecast.list[39].wind.speed
    var humidity = forecast.list[39].main.humidity
    

    var forecastCard = document.createElement('div');
    forecastCard.classList.add('card','w-5','bg-dark', 'text-light', 'mb-3', 'p-3')
    // fiveDayWeather.innerHTML = "";
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



function saveWeather() {
    var cityText = inputArea.value;
    if(!cityText) {
        console.log("pls enter a city")
        return;
    } else {
        localStorage.setItem("city",cityText);
    };

    
    var savedCitiesBtn = document.createElement('button');
   savedCitiesBtn.classList.add('btn', 'btn-secondary', 'm-3', 'p-3');
    savedCitiesBtn.innerHTML = localStorage.getItem("city");
    savedCities.append(savedCitiesBtn);

    savedCitiesBtn.addEventListener("click", function(event) {

    }
    )
   
}

// inputArea.addEventListener("keydown", function(event) {
//     if (event.key == 8 || event.key == 46) {
//         console.log("deleted");
//     }
// });



