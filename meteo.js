async function launch() {
    const apikey = "79d9ad16ccf76785903a9d3be11a14cb";
    
    //Remplacer le nom de la ville par celle souhaitée//
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bordeaux";


    const weathericon = document.querySelector(".weather-icon");

    console.log("hi")

    const response = await fetch(apiurl + `&appid=${apikey}`);

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "img/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "img/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "img/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "img/mist.png";
    }
}
