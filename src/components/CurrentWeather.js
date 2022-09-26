import React from "react";

import "./CurrentWeather.css";
import Date from "./Date";

export default function CurrentWeather() {
    return (
        <div className="descriptionBox">
            <div className="current">
                <h1 id="currentCity">City</h1>
                <div className="currentTemp">
                    <span>74</span><span>F</span>|<span>C</span>
                </div>
            </div>
            <div className="currentDescription">
                <div className="detailsArea">
                    <Date />
                    <div className="details">
                        <div>description</div>
                        <div>humidity</div>
                        <div>wind</div>
                    </div>
                </div>
                <div id="weatherImage">weather image</div>
            </div>
        </div>
    );
}