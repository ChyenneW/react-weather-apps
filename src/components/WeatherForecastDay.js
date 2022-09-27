import React from "react";

export default function WeatherForecastDay(props) {
    let iconCode = props.forecastData.weather[0].icon;
    let weatherIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    function day() {
        let date = new Date(props.forecastData.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="forecastDay">{day()}</div>
            <div className="forecastImage">
                <img src={weatherIcon} alt={props.forecastData.weather.main} />
            </div>
            <div>
                <span className="forecastLow">
                    {Math.round(props.forecastData.temp.min)}
                </span>
                /
                <span className="forecastHigh">
                    {Math.round(props.forecastData.temp.max)}
                </span>
            </div>
        </div>
    );
}