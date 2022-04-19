import React from "react";
import { Link } from "react-router-dom";

import Date from "./Date";
import TemperatureConversion from "./TemperatureConversion";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="row searchedCityHead">
        <Link to="/" className="col-1 navigationLinks">
          ⇐
        </Link>
        <h3 className="col-6 searchedCity">{props.data.city}</h3>
        <Link to="detailed" className="col-1 navigationLinks">
          ⇒
        </Link>
      </div>
      <div className="row">
        <ul className="timeList">
          <li>
            <Date date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="row">
        <TemperatureConversion
          imperial={props.data.temperature}
          low={props.data.tempMin}
          high={props.data.tempMax}
        />
      </div>
      <div className="row d-flex justify-content-evenly imageDescription">
        <div className="col-6">
          <div className="weatherDescription">{props.data.description}</div>
          <ul className="weatherExtras">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
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
