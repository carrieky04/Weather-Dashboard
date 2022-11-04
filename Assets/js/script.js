var searchBtn = document.querySelector('#search-btn');
console.log('test1')
function getApi(event) {
    event.preventDefault();
    var inputEl = document.querySelector('#exampleFormControlInput1');
    var cityName = inputEl.value;

    console.log("in getAPI()");
    // var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=7dd3c97591974f9fd579b18818499b7c";
    var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=3&appid=7dd3c97591974f9fd579b18818499b7c"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        }
    )
}

searchBtn.addEventListener("click", getApi);