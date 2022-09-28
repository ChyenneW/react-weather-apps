import React from "react";

import './WeatherForecast.css';

export default function WeatherForecastDay(props) {
    let iconCode = props.forecastData.weather[0].icon;
    let weatherIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    function day() {
        let date = new Date(props.forecastData.dt * 1000);
        let day = date.getDay();
        let days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];

        return days[day];
    }

    return (
        <div>
            <div className="forecastDay">{day()}</div>
            <div className="d-flex align-items-center">
                <div className="forecastImage">
                    <img src={weatherIcon} alt={props.forecastData.weather.main} />
                </div>
                <div className="forecastDetails">
                    <span>{props.forecastData.weather[0].description}</span>{" "}|{" "}
                    <span className="forecastHigh">H</span>
                    <span>
                        {Math.round(props.forecastData.temp.max)}°
                    </span>
                    <span className="forecastLow">L</span>
                    <span>
                        {Math.round(props.forecastData.temp.min)}°
                    </span>
                </div>
            </div>
        </div>
    );
}