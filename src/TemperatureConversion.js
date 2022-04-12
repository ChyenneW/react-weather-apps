import React, { useState } from "react";

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
          {props.imperial}°<span className="unit">F</span> |{" "}
          <span className="unit">
            <a href="/" onClick={convertToCel}>
              C
            </a>
          </span>
        </p>
        <small className="col-12">
          47°<span className="unit">F</span>/79°
          <span className="unit">F</span>
        </small>
      </div>
    );
  } else {
    let metric = Math.Round((props.imperial - 32) * (5 / 9));

    return (
      <div>
        <p className="col-12">
          {metric}°
          <span className="unit">
            <a href="/" onClick={convertToFah}>
              F
            </a>
          </span>{" "}
          | <span className="unit">C</span>
        </p>
        <small className="col-12">
          47°<span className="unit">C</span>/79°
          <span className="unit">C</span>
        </small>
      </div>
    );
  }
}
