import Footer from "./Footer";
import WeatherSearch from "./WeatherSearch";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="container App">
        <header className="App-header">
          <div>Weather App</div>
        </header>
        <WeatherSearch defaultCity="New York" />
      </div>
      <Footer />
    </div>
  );
}
