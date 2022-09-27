import React, { useContext } from "react";
import DateInfo from "./Date";
import WeatherData from "./WeatherData";
import { AppContext } from "../context/WeatherContext";

import "./CurrentWeather.css";
import WeatherImage from "./WeatherImage";

export default function CurrentWeather() {
    const { city } = useContext(AppContext);
    const { data } = useContext(AppContext);

    return (
        <div className="descriptionBox">
            <div className="current">
                <h1 id="currentCity">{city}</h1>
                <div className="currentTemp">
                    <span>{data.temperature}</span><span>F</span>|<span>C</span>
                </div>
            </div>
            <div className="currentDescription">
                <div className="detailsArea">
                    <DateInfo />
                    <WeatherData />
                </div>
                <WeatherImage />
            </div>
        </div>
    );
}