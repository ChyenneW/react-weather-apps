import React, { useContext } from "react";
import DateInfo from "./Date";
import WeatherImage from "./WeatherImage";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
    return (
        <div className="descriptionBox">
            <div className="current">
                <h1 id="currentCity">{props.data.city}</h1>
                <div className="currentTemp">
                    <span>{props.data.temperature}</span><span>F</span>|<span>C</span>
                </div>
            </div>
            <div className="currentDescription">
                <div className="detailsArea">
                    <DateInfo />
                </div>
                <div>
                    <WeatherImage icon={props.data.icon} description={props.data.description} />
                </div>
            </div>
        </div>
    );
}