import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/WeatherContext";

import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast() {
    const { data } = useContext(AppContext);

    let [loaded, setLoaded] = useState("unloaded");
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded("unloaded");
    }, [data.coords]);

    if (loaded === "unloaded") {
        let apiKey = "624159ad3ba6f7dd7f8492ffa1d7a854";
        let units = "imperial";
        let lat = data.coords.lat;
        let lon = data.coords.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

        function showForecast(response) {
            console.log(response.data.daily);
            setForecast(response.data.daily);
            setLoaded("loaded");
        }

        axios.get(apiUrl).then(showForecast);

        return null;
    } else {
        return (
            <div className="container">
                <div className="row weatherForecast">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 4) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay forecastData={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    }
}