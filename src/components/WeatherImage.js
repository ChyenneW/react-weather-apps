import React, { useContext } from "react";

export default function WeatherImage(props) {
    let image = `https://openweathermap.org/img/wn/${props.icon}@2x.png`

    return (
        <div id="weatherImage">
            <img src={image} alt={props.description} />
        </div>
    );
}