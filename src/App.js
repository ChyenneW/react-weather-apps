import Footer from "./Footer";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div>Weather App</div>
        </header>
      </div>
      <WeatherSearch defaultCity="New York" />
      <Footer />
    </div>
  );
}
