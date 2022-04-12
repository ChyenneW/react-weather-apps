import React from "react";

import Date from "./Date";
import TemperatureConversion from "./TemperatureConversion";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="row searchedCity">
        <h3>{props.data.city}</h3>
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
      <div className="row">
        <p className="col-6">{props.data.description}</p>
        <img
          src={props.data.image}
          alt={props.data.description}
          className="col-6"
        ></img>
      </div>
      <div className="row">
        <ul className="">
          <li>Humidity:{props.data.humidity} %</li>
          <li>Wind:{props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
