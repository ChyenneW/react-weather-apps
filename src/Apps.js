import SearchWeather from "./components/SearchWeather";
import CurrentWeather from "./components/CurrentWeather";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Apps() {
    return (
        <div className="App">
            <div>
                <SearchWeather />
            </div>
            <div className="music">make me a radio</div>
            <CurrentWeather />
            <div className="weekforcast">sunday</div>
        </div>
    );
}