import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./GeoWeather.css";

export default function GeoWeather() {
  const [weatherData, setWeatherData] = useState("");
  let [loaded, setLoaded] = useState("unloaded");

  useEffect(() => {
    setLoaded("unloaded");
  }, [""]);

  function getLocation(event) {
    navigator.geolocation.getCurrentPosition(getCoords);
  }

  function giveCoordsWeather(response) {
    console.log(response);
    let icon = response.data.weather[0].icon;

    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      tempMax: Math.round(response.data.main.temp_max),
      tempMin: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].main,
      image: `https://openweathermap.org/img/wn/${icon}@2x.png`,
      coords: response.data.coord,
    });

    setLoaded("loaded");
  }

  function getCoords(position) {
    let apiKey = "624159ad3ba6f7dd7f8492ffa1d7a854";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let coordsApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    axios.get(coordsApiUrl).then(giveCoordsWeather);
  }

  if (loaded === "unloaded") {
    getLocation();

    return <div>Tracking your location.</div>;
  } else {
    return (
      <div className="container">
        <div className="row searchedCityHead">
          <Link to="/" className="col-1 navigationLinks">
            ⇐
          </Link>
          <h3 className="col-6 searchedCity">{weatherData.city}</h3>
        </div>
        <div className="row weatherDescription">
          <div className="col-7">
            <div>It is {weatherData.temperature}°F .</div>
            <div>
              Today's highs are going to climb to around {weatherData.tempMax}
              and the lows are going to dip to {weatherData.tempMin}.
            </div>
          </div>
          <div className="col-2">
            <img
              src={weatherData.image}
              alt={weatherData.description}
              className="weatherImage"
            />
          </div>
        </div>
      </div>
    );
  }
}
