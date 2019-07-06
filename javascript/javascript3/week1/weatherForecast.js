//API Key for the openweathermap api site
const weather_key = "3ad13a1d67a59806d125829beec803f3";

//Get cityTag to select city for whose the forecast needs to be taken
cityTag = document.getElementById("cityTag");

function getWeather() {
  //let city = cityTag.options[cityTag.selectedIndex].value;
  let city = cityTag.value;

  errorMessage = "";

  const baseURL = "https://api.openweathermap.org/data/2.5/weather?";

  let queryURL =
    baseURL + "q=" + city + "&appid=" + weather_key + "&units=metric";

  console.log(queryURL);

  fetch(queryURL)
    .then(
      //Collect Response and convert response to JS Object
      resp => resp.json()
    )
    .then(function(data) {
      //Check if data is properly being found
      console.log(data);

      //Fill out the city Data
      let targetCity = document.getElementById("targetCity");
      if(targetCity.name === ""){
        console.log ("Please enter the name of a city")
    } else {
      targetCity.innerHTML = data.name + "'s Weather Today"};

      //Display temperature by appending temperature to the p tag.
      let temperature = data.main.temp;
      document.getElementById("temperature").innerHTML =
        "Temperature: " + temperature + " Deg. Cel.";

      //Add Weather Icon

      //Heading for weatherToday Element
      let weatherToday = data.weather[0].description; //First data read from among multiple options in API
      document.getElementById("weatherToday").innerHTML = "The Weather Today: " + weatherToday;
      
      //Get the weather code
      let weatherCode = data.weather[0].icon;
      //append the weather code to the url
      let iconURL = "http://openweathermap.org/img/wn/" + weatherCode + ".png";
      document.getElementById("weatherCode").src = iconURL;

      //Get the windspeed and append to windspeed tag in html
      let windSpeed = data.wind.speed;
      document.getElementById("windSpeed").innerHTML =
        "WindSpeed: " + windSpeed + " kmph";

      //Get the sunrise and sunset times. The Sunrise and Sunset Times are in UNIX UTC Formats.

      let sunriseUTC = data.sys.sunrise;
      let sunsetUTC = data.sys.sunset;

      sunriseTime = new Date(sunriseUTC * 1000); //1000 is milliseconds as per conversion guidelines
      sunsetTime = new Date(sunsetUTC * 1000);
      document.getElementById("sunriseTime").innerHTML =
        "Sunrise Time (as per CET): " + sunriseTime.toLocaleTimeString();
      document.getElementById("sunsetTime").innerHTML =
        "Sunset Time (as per CET): " + sunsetTime.toLocaleTimeString();
    })

    .catch(function(error) {
      console.log(error);
      errorMessage.innerHTML = "Oops! Something went wrong! Please input the city name again...";
    });
}

//Calling the function using DOM

document.getElementById("myBtn").addEventListener("click", getWeather);
