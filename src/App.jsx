import React, { useState } from "react";
import "leaflet/dist/leaflet.css";

import "./styles/App.css";

// components
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Map from "./components/MapComponents/Map";
import StatisticsBoard from "./components/StatsComponents/StatisticsBoard";
import GraphBoard from "./components/GraphComponents/GraphBoard";

const App = () => {
  // state constants
  const [continentData, setContinentData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [vaccineData, setVaccineData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar
          setContinentData={setContinentData}
          setCountryData={setCountryData}
          setVaccineData={setVaccineData}
        />
      </header>
      <div className="dashboard">
        <StatisticsBoard
          countryData={countryData}
          continentData={continentData}
          vaccineData={vaccineData}
        />
        <Map />
        <GraphBoard />
      </div>
      <Display />
    </div>
  );
};

export default App;
