import React from "react";
import { Link } from "react-router-dom";

import "./WeatherSearch.css";

export default function GeolocationButton() {
  return (
    <div className="col-2">
      <Link to="geo-weather">
        <button className="geoLocateButton">Current Location</button>
      </Link>
    </div>
  );
}
