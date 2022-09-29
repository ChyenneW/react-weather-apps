import SearchWeather from "./components/SearchWeather";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";


export default function Apps() {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="App">
                    <div>
                        <SearchWeather />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}