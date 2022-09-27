import React from "react";

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
            <div className="forecastImage">
                <img src={weatherIcon} alt={props.forecastData.weather.main} />
                <span>{props.forecastData.weather[0].description}</span>|
                <span className="forecastHigh">
                    H{Math.round(props.forecastData.temp.max)}
                </span>
                <span className="forecastLow">
                    C{Math.round(props.forecastData.temp.min)}
                </span>
            </div>
        </div>
    );
}