import React from "react";

export default function Date(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let hour = props.date.getHours();
  if (hour <= 9) {
    hour = `0${hour}`;
  }

  if (hour >= 13) {
    hour = hour - 12;
  }

  let minutes = props.date.getMinutes();
  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }

  if (props.date.getHours >= 13) {
    return (
      <div>
        {day}, {hour}:{minutes} P.M
      </div>
    );
  } else {
    return (
      <div>
        {day}, {hour}:{minutes} A.M
      </div>
    );
  }
}
