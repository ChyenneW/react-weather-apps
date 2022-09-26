import SearchWeather from "./components/SearchWeather";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Apps() {
    return (
        <div className="App">
            <div className="searchArea">
                <SearchWeather />
            </div>
            <div className="music">make me a radio</div>
            <div className="dayforcast">dallas</div>
            <div className="weekforcast">sunday</div>
        </div>
    );
}