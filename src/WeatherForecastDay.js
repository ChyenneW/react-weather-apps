import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <div className="forecastImage">{props.forecastData.weather[0].icon}</div>
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
