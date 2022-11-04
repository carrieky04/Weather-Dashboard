var searchBtn = document.querySelector('#search-btn');
var currentWeather = document.querySelector('.container-fluid');

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
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            console.log(lat)
            console.log(lon);
            var requestLatLon = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=7dd3c97591974f9fd579b18818499b7c";
                fetch(requestLatLon)
                    .then(function (response) {
                        return response.json();
                    })
                    .then (function (data) {
                        console.log(data);
                        var { temp } = list.main;
                        console.log(temp);
                    })                   
        })  
}

searchBtn.addEventListener("click", getWeather);



