import { AppProvider } from "./context/WeatherContext";
import SearchWeather from "./components/SearchWeather";
import CurrentWeather from "./components/CurrentWeather";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherForecast from "./components/WeatherForecast";

export default function Apps() {
    return (
        <AppProvider>
            <div className="App">
                <div>
                    <SearchWeather />
                </div>
                <div className="music">make me a radio</div>
                <CurrentWeather />
                <div className="weekforcast">sunday</div>
                <WeatherForecast />
            </div>
        </AppProvider>
    );
}