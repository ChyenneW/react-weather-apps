import React from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let apiKey = "624159ad3ba6f7dd7f8492ffa1d7a854";
  let units = "imperial";
  let lat = props.coords.lat;
  let lon = props.coords.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  function showForecast(response) {
    console.log(response.data);
  }

  axios.get(apiUrl).then(showForecast);

  return (
    <div className="container">
      <div className="row weatherForecast">
        <div className="col">
          <div className="forecastDay">Mon</div>
          <div className="forecastImage">image</div>
          <div>
            <span className="forecastLow">10</span>/
            <span className="forecastHigh">30</span>
          </div>
        </div>
      </div>
    </div>
  );
}
