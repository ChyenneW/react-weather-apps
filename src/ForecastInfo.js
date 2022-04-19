import React from "react";

import "./ForecastInfo.css";

export default function ForecastInfo(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 briefDescriprion">
          The humidity in your area is at {props.humidity}% and the winds are
          blowing at {props.wind}km/h.
        </div>
      </div>
    </div>
  );
}
