import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/WeatherContext";

import "./SearchWeather.css";

export default function SearchWeather() {
    const { contextCity, dispatch } = useContext(AppContext);
    let [city, setCity] = useState("");
    let [data, setWeatherData] = useState({});

    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            temperature: Math.round(response.data.main.temp),
            tempMax: Math.round(response.data.main.temp_max),
            tempMin: Math.round(response.data.main.temp_min),
            wind: Math.round(response.data.wind.speed),
            humidity: Math.round(response.data.main.humidity),
            description: response.data.weather[0].main,
            icon: response.data.weather[0].icon,
            coords: response.data.coord,
        });

        dispatch({
            type: 'UPDATE_DATA',
            payload: data,
        });
        console.log(data);
    }

    function callForData() {
        const apiKey = "624159ad3ba6f7dd7f8492ffa1d7a854";
        let units = "imperial";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
    }

    const submitCity = (event) => {
        event.preventDefault();

        dispatch({
            type: 'UPDATE_CITY',
            payload: city,
        });

        callForData();
    };

    return (
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
            <button className="locationButton">Current Location</button>
        </div>
    );
}