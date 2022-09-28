import React from "react";
import DateInfo from "./Date";
import WeatherData from "./WeatherData";
import WeatherImage from "./WeatherImage";

import "./CurrentWeather.css";


export default function CurrentWeather(props) {
    return (

        <div className="descriptionBox">
            <div className="current">
                <h1 className="mainCity">{props.data.city}</h1>
                <div className="currentTemp">
                    <span className="mainTemp">{props.data.temperature}</span>{" "}
                    <span className="units"><span>°F</span>|<span>°C</span></span>
                </div>
            </div>
            <div className="currentDescription">
                <div className="detailsArea">
                    <DateInfo />
                    <WeatherData data={props.data} />
                </div>
                <div className="weatherImage">
                    <WeatherImage icon={props.data.icon} description={props.data.description} />
                </div>
            </div>
        </div>
    );
}