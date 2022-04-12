import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

import "./WeatherSearch.css";

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
      <div>
        <div className="container">
          <div className="search">
            <form className="row">
              <input
                type="search"
                placeholder="Enter a City"
                className="col-4 searchBar"
              />
              <imput
                type="submit"
                value="Search"
                className="col-3 btn searchButton"
              />
            </form>
            <div className="row">
              <div className="col-3">
                <button className="geoLocateButton">Current Location</button>
              </div>
            </div>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "624159ad3ba6f7dd7f8492ffa1d7a854";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return <div>Loading Weather...</div>;
  }
}
