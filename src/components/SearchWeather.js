import React, { useContext, useState } from "react";
import { AppContext } from "../context/WeatherContext";

import "./SearchWeather.css";

export default function SearchWeather() {
    const { contextCity, dispatch } = useContext(AppContext);
    let [city, setCity] = useState("");

    const submitCity = (event) => {
        event.preventDefault();

        dispatch({
            type: 'UPDATE_CITY',
            payload: city,
        });
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