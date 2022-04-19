import React from "react";
import { Link } from "react-router-dom";

import Date from "./Date";

export default function SearchedCity(props) {
  return (
    <div>
      <div className="row searchedCityHead">
        <Link to="/" className="col-1 navigationLinks">
          ⇐
        </Link>
        <h3 className="col-6 searchedCity">{props.data.city}</h3>
        <Link to="detailed" className="col-1 navigationLinks">
          ⇒
        </Link>
      </div>
      <div className="row">
        <ul className="timeList">
          <li>
            <Date date={props.data.date} />
          </li>
        </ul>
      </div>
    </div>
  );
}
