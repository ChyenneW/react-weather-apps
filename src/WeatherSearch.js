import React from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function WeatherSearch(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    let icon = response.data.weather[0].icon;
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].main,
      image: `https://openweathermap.org/img/wn/${icon}@2x.png`,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="row">
          <form>
            <input type="search" placeholder="Enter a City" />
            <imput type="submit" value="Search" />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "624159ad3ba6f7dd7f8492ffa1d7a854";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return <div>Loading Weather...</div>;
}
