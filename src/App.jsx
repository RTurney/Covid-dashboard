import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import "./styles/App.css";

// components
import {
  Navbar,
  Display,
  Map,
  StatisticsBoard,
  GraphBoard,
} from "./components";
import { DataProvider } from "./contexts";
import {
  fetchContinentsCovidData,
  fetchCountriesCovidData,
  fetchGraphData,
  fetchStatistics,
} from "./api";
import { combineCountryData, combineContinentData } from "./components/utils";
import { features as countryGeoJSON } from "./data/countries.json";
import { features as continentGeoJSON } from "./data/continents.json";

const App = () => {
  const [continentData, setContinentData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [combinedCountryData, setCombinedCountryData] = useState(null);
  const [combinedContinentData, setCombinedContinentData] = useState(null);
  const [covidStats, setCovidStats] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const [showComponent, setShowComponent] = useState("countries");

  const fetchData = async () => {
    const countryResponse = await fetchCountriesCovidData();
    setCountryData(countryResponse);

    const statisticsResponse = await fetchStatistics();
    setCovidStats(statisticsResponse);

    const graphResponse = await fetchGraphData();
    setGraphData(graphResponse);

    const combinedCountryInfo = await combineCountryData(
      countryResponse,
      countryGeoJSON
    );
    setCombinedCountryData(combinedCountryInfo);

    const continentResponse = await fetchContinentsCovidData();
    setContinentData(continentResponse);

    const combinedContinentInfo = await combineContinentData(
      continentResponse,
      continentGeoJSON
    );
    setCombinedContinentData(combinedContinentInfo);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loading =
    !continentData ||
    !countryData ||
    !combinedCountryData ||
    !covidStats ||
    !graphData;

  if (loading) {
    return <div>Loading! :)</div>;
  }

  return (
    <DataProvider
      continentData={continentData}
      countriesData={countryData}
      statisticsData={covidStats}
      graphData={graphData}
      combinedCountryData={combinedCountryData}
      combinedContinentData={combinedContinentData}
      showComponent={showComponent}
      setShowComponent={setShowComponent}
    >
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
