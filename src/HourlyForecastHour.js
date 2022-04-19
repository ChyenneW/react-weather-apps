import React from "react";

export default function HourlyForcastHour(props) {
  let iconCode = props.forecastData.weather[0].icon;
  let weatherIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  function hour() {
    let date = new Date(props.forecastData.dt * 1000);
    let hour = date.getHours();

    if (hour >= 12) {
      return <div>{hour - 12}PM</div>;
    } else {
      return <div>{hour}AM</div>;
    }
  }

  return (
    <div>
      <div className="forecastHour">{hour()}</div>
      <div className="forecastImage">
        <img src={weatherIcon} alt={props.forecastData.weather.main} />
      </div>
      <div>
        <span className="forecastLow">
          {Math.round(props.forecastData.temp)}°
        </span>
      </div>
    </div>
  );
}
