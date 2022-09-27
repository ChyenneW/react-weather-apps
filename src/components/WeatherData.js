import React, { useContext } from "react";
import { AppContext } from "../context/WeatherContext";



export default function WeatherData() {
    const { data } = useContext(AppContext);

    return (
        <div className="details">
            <div>{data.description}</div>
            <div>Humidity: {data.humidity}%</div>
            <div>Wind Speed: {data.wind} MPH</div>
        </div>
    );
}