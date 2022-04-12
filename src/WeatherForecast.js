import React from "react";

export default function WeatherForecast() {
  return (
    <div className="container">
      <div className="row weatherForecast">
        <div className="col">
          <div className="forecastDay">Mon</div>
          <div className="forecastImage">image</div>
          <div>
            <span className="forecastLow">10</span>/
            <span className="forecastHigh">30</span>
          </div>
        </div>
      </div>
    </div>
  );
}
