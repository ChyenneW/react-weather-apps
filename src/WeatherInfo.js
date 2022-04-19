import React from "react";
import { Link } from "react-router-dom";

import Date from "./Date";
import SearchedCity from "./SearchedCity";
import TemperatureConversion from "./TemperatureConversion";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <SearchedCity data={props.data} />
      <div className="row">
        <TemperatureConversion
          imperial={props.data.temperature}
          low={props.data.tempMin}
          high={props.data.tempMax}
        />
      </div>
      <div className="row d-flex justify-content-evenly imageDescription">
        <div className="col-6">
          <div className="weatherDescription">
            <i>{props.data.description}</i> is in your forecast for today.
          </div>
        </div>
        <div className="col-6">
          <img
            src={props.data.image}
            alt={props.data.description}
            className="weatherImage"
          />
        </div>
      </div>
    </div>
  );
}
