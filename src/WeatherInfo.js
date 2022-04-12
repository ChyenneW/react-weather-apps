import React from "react";

import Date from "./Date";
import TemperatureConversion from "./TemperatureConversion";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="row">
        <h3 className="searchedCity">{props.data.city}</h3>
      </div>
      <div className="row">
        <ul className="timeList">
          <li>
            <Date date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="row">
        <TemperatureConversion imperial={props.data.temperature} />
      </div>
      <div className="row d-flex justify-content-evenly imageDescription">
        <div className="col-6 weatherDescription">{props.data.description}</div>
        <div className="col-6">
          <img
            src={props.data.image}
            alt={props.data.description}
            className="weatherImage"
          />
        </div>
      </div>
      <div className="row">
        <ul className="weatherExtras">
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
