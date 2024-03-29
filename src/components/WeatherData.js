import React from "react";

import "./WeatherData.css";

export default function WeatherData(props) {
    return (
        <div className="details">
            <div>{props.data.description}</div>
            <div>Humidity: {props.data.humidity}%</div>
            <div>Wind Speed: {props.data.wind} MPH</div>
        </div>
    );
}