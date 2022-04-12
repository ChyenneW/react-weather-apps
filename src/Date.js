import React from "react";

export default function Date(props) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[props.date.getMonth()];
  let date = props.date.getDate();

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
        <div>
          {day},{month}
          {""}
          {date}
        </div>
        <div>
          {hour}:{minutes} P.M
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {day},{month}
          {""}
          {date}
        </div>
        <div>
          {hour}:{minutes} A.M
        </div>
      </div>
    );
  }
}
