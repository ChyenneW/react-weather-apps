import SearchWeather from "./components/SearchWeather";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


export default function Apps() {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="App">
                <div>
                    <SearchWeather />
                </div>
            </div>
        </div>
    );
}