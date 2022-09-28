import React, { useState, useEffect } from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

import "./SearchWeather.css";

export default function SearchWeather() {
    let [city, setCity] = useState("");
    let [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const apiKey = "624159ad3ba6f7dd7f8492ffa1d7a854";
        let units = "imperial";
        let defaultCity = "New York";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
    }, []);

    function handleResponse(response) {
        console.log(response.data.name);

        setCity(response.data.name)
        console.log(city);

        setWeatherData({
            city: response.data.name,
            temperature: Math.round(response.data.main.temp),
            tempMax: Math.round(response.data.main.temp_max),
            tempMin: Math.round(response.data.main.temp_min),
            wind: Math.round(response.data.wind.speed),
            humidity: Math.round(response.data.main.humidity),
            description: response.data.weather[0].main,
            icon: response.data.weather[0].icon,
            lat: response.data.coord.lat,
            lon: response.data.coord.lon,
        });

        console.log(weatherData);
    }

    function callForData() {
        const apiKey = "624159ad3ba6f7dd7f8492ffa1d7a854";
        let units = "imperial";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
    }

    const submitCity = (event) => {
        event.preventDefault();
        callForData();
    };

    return (
        <div>
            <div className="searchArea">
                <form onSubmit={submitCity}>
                    <input
                        type="search"
                        placeholder="Enter a City"
                        className="searchBar"
                        onChange={(event) => setCity(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="searchButton"
                    >
                        Search
                    </button>
                </form>
                <button className="locationButton">Find Me</button>
            </div>
            <div className="d-flex justify-content-center">
                <div className="music">make me a radio</div>
            </div>
            <div>
                <CurrentWeather data={weatherData} />
                <div className="weekforcast">
                    <WeatherForecast data={weatherData} />
                </div>
            </div>
        </div>
    );
}