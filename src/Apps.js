import { AppProvider } from "./context/WeatherContext";
import SearchWeather from "./components/SearchWeather";
import CurrentWeather from "./components/CurrentWeather";
import WeatherData from "./components/WeatherData";
import WeatherForecast from "./components/WeatherForecast";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


export default function Apps() {
    return (
        <AppProvider>
            <div className="App">
                <div>
                    <SearchWeather />
                </div>
                <div className="music">make me a radio</div>
                <CurrentWeather />
                <WeatherData />
                <div className="weekforcast">sunday</div>
                <WeatherForecast />
            </div>
        </AppProvider>
    );
}