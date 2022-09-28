import SearchWeather from "./components/SearchWeather";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


export default function Apps() {
    return (
        <div className="App">
            <div>
                <SearchWeather />
            </div>
        </div>
    );
}