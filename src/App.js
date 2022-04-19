import { Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import WeatherSearch from "./WeatherSearch";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DetailedSearch from "./DetailedSearch";
import GeoWeather from "./GeoWeather";

export default function App() {
  return (
    <div>
      <div className="container App">
        <header className="App-header">
          <div />
        </header>
        <Routes>
          <Route path="/" element={<WeatherSearch defaultCity="New York" />} />
          <Route
            path="detailed"
            element={<DetailedSearch defaultCity="New York" />}
          />
          <Route path="geo-weather" element={<GeoWeather />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
