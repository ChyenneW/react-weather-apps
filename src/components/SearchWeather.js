import React from "react";

import "./SearchWeather.css";

export default function SearchWeather() {
    return (
        <div className="searchArea">
            <form className="col-8">
                <input
                    type="search"
                    placeholder="Enter a City"
                    className="col-6 searchBar"
                />
                <button
                    type="submit"
                    className="col-4 searchButton"
                >
                    Search
                </button>

            </form>
        </div>
    );
}