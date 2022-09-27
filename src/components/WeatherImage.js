import React, { useContext } from "react";
import { AppContext } from "../context/WeatherContext";

export default function WeatherImage() {
    const { data } = useContext(AppContext)
    let image = `https://openweathermap.org/img/wn/${data.icon}@2x.png`

    return (
        <div id="weatherImage">
            <img src={image} alt={data.description} />
        </div>
    );
}