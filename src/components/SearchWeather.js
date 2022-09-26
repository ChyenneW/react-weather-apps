import React from "react";

import "./SearchWeather.css";

export default function SearchWeather() {
    return (
        <div className="searchArea">
            <form >
                <input
                    type="search"
                    placeholder="Enter a City"
                    className="searchBar"
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