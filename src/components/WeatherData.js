import React, { useContext } from "react";

export default function WeatherData(props) {
    return (
        <div className="details">
            <div>{props.data.description}</div>
            <div>Humidity: {props.data.humidity}%</div>
            <div>Wind Speed: {props.data.wind} MPH</div>
        </div>
    );
}