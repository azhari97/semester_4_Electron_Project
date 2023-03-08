window.addEventListener('load', Tunisia);
function Tunisia() {
  // generate tunisia main city,tunis
    var city = "Tunis"; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        //variable for fetching the data
        var celcius = (data.main.temp - 273.15).toFixed(1);
        var timezoneOffset = data.timezone +(16 * 60 * 60);
        var currentTime = new Date(Date.now() + (timezoneOffset * 1000));
        var time = currentTime.toLocaleTimeString();
        var sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();

        // append elements into html elements 
        document.getElementById("time").innerHTML = `Current Time: ${time} UTC 1:00`;
        document.getElementById("temperature").innerHTML = `Temperature : ${celcius} *C`; 
        document.getElementById("humidity").innerHTML = `Sunrise Time : ${sunrise} `; 
        document.getElementById("windspeed").innerHTML = `Wind Speed: ${data.wind.speed} km/h`;
        document.getElementById("weather").innerHTML = `Current Weather: ${data.weather[0].main}`; 
    })
}