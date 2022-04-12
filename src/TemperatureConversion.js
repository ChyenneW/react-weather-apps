import React, { useState } from "react";

import "./TemperatureConversion.css";

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
                C
              </a>
            </span>
          </span>
        </p>
        <small className="col-12 tempRange">
          <span className="tempLow">47</span>°F/
          <span className="tempHigh">79</span>°F
        </small>
      </div>
    );
  } else {
    let metric = Math.Round((props.imperial - 32) * (5 / 9));

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tempNow">{metric}</div>
            <div className="units">
              °
              <span>
                <a href="/" onClick={convertToFah} className="conversionLink">
                  F
                </a>
              </span>{" "}
              | <span className="active">C</span>
            </div>
          </div>
        </div>
        <div className="row">
          <small className="col-12 tempRange">
            <span className="tempLow">47</span>°C/
            <span className="tempHigh">79</span>°C
          </small>
        </div>
      </div>
    );
  }
}
