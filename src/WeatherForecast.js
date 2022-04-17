import React, { useState } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState("unloaded");
  let [forecast, setForecast] = useState(null);

  if (loaded === "unloaded") {
    let apiKey = "624159ad3ba6f7dd7f8492ffa1d7a854";
    let units = "imperial";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    function showForecast(response) {
      console.log(response.data.daily);
      setForecast(response.data.daily);
      setLoaded("loaded");
    }

    axios.get(apiUrl).then(showForecast);

    return null;
  } else {
    return (
      <div className="container">
        <div className="row weatherForecast">
          <div className="col">
            <WeatherForecastDay forecastData={forecast[0]} />
          </div>
        </div>
      </div>
    );
  }
}
