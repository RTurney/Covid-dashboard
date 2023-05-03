import React from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./styles/App.css";

// components
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Map from "./components/MapComponents/Map";
import StatisticsBoard from "./components/StatsComponents/StatisticsBoard";
import GraphBoard from "./components/GraphComponents/GraphBoard";
import { DataProvider } from "./contexts";

const App = () => {
  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="dashboard">
          <StatisticsBoard />
          <Map />
          <GraphBoard />
        </div>
        <Display />
      </div>
    </DataProvider>
  );
};

export default App;
