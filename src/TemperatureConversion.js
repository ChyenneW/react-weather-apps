import React, { useState } from "react";

import "./TemperatureConversion.css";
import WeatherForecast from "./WeatherForecast";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("imperial");

  function convertToCel(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertToFah(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <div>
        <p className="col-12">
          <span className="tempNow">{props.imperial}</span>{" "}
          <span className="units">
            °<span className="active">F</span> |{" "}
            <span>
              <a href="/" onClick={convertToCel} className="conversionLink">
                °C
              </a>
            </span>
          </span>
        </p>
        <small className="col-12 tempRange">
          <span className="tempLow">{props.low}</span>°F/
          <span className="tempHigh">{props.high}</span>°F
        </small>
      </div>
    );
  } else {
    let metric = Math.round((props.imperial - 32) * (5 / 9));
    let metricMin = Math.round((props.low - 32) * (5 / 9));
    let metricMax = Math.round((props.high - 32) * (5 / 9));
    return (
      <div>
        <p className="col-12">
          <span className="tempNow">{metric}</span>{" "}
          <span className="units">
            °<span className="active">C</span> |{" "}
            <span>
              <a href="/" onClick={convertToFah} className="conversionLink">
                °F
              </a>
            </span>
          </span>
        </p>
        <small className="col-12 tempRange">
          <span className="tempLow">{metricMin}</span>°C/
          <span className="tempHigh">{metricMax}</span>°C
        </small>
      </div>
    );
  }
}
