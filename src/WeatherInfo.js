import react from "react";

import Date from "./Date";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="row">
        <div>{props.data.city}</div>
      </div>
      <div className="row">
        <ul>
          <li>
            <Date date={props.data.date} />
          </li>
          <li>5:04 PM</li>
        </ul>
      </div>
      <div className="row">
        <p className="col-12">67°F</p>
        <small className="col-12">47°F/79°F</small>
      </div>
      <div className="row">
        <p className="col-6">{props.data.description}</p>
        <img
          src={props.data.image}
          alt={props.data.description}
          className="col-6"
        ></img>
      </div>
      <div className="row">
        <ul>
          <li>Humidity:{props.data.humidity} %</li>
          <li>Wind:{props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
