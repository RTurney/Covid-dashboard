import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import "./styles/App.css";

// components
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Map from "./components/MapComponents/Map";
import StatisticsBoard from "./components/StatsComponents/StatisticsBoard";
import GraphBoard from "./components/GraphComponents/GraphBoard";
import { DataProvider } from "./contexts";
import {
  fetchCountriesCovidData,
  fetchGraphData,
  fetchStatistics,
} from "./api";
import { features } from "./data/countries.json";

const App = () => {
  const [continentData, setContinentData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [combinedCountryData, setCombinedCountryData] = useState(null);
  const [covidStats, setCovidStats] = useState(null);
  const [graphData, setGraphData] = useState(null);

  const combineData = (countryData) => {
    const combinedData = features.map((country) => {
      country.country = "L";
      country.cases = 0;
      country.todayCases = 0;
      country.deaths = 0;
      country.todayDeaths = 0;
      country.casesPerOneMillion = 0;
      country.deathsPerOneMillon = 0;
      country.population = 0;
      for (let i = 0; i < countryData.length; i++) {
        const covidCountry = countryData[i];
        if (covidCountry.countryInfo.iso3 === country.properties.ISO_A3) {
          country.country = covidCountry.country;
          country.cases = covidCountry.cases;
          country.todayCases = covidCountry.todayCases;
          country.deaths = covidCountry.deaths;
          country.todayDeaths = covidCountry.todayDeaths;
          country.casesPerOneMillion = covidCountry.casesPerOneMillion;
          country.deathsPerOneMillon = covidCountry.deathsPerOneMillon;
          country.population = covidCountry.population;
        }
      }
      return country;
    });
    return combinedData;
  };

  const fetchData = async () => {
    const countryData = await fetchCountriesCovidData();
    setCountryData(countryData);

    const statisticsData = await fetchStatistics();
    setCovidStats(statisticsData);

    const graphData = await fetchGraphData();
    setGraphData(graphData);

    const combinedData = await combineData(countryData);
    setCombinedCountryData(combinedData);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loading =
    !countryData || !combinedCountryData || !covidStats || !graphData;

  if (loading) {
    return <div>Loading! :)</div>;
  }

  return (
    <DataProvider
      continentData={continentData}
      countriesData={countryData}
      statisticsData={covidStats}
      graphData={graphData}
      combinedData={combinedCountryData}
      setContinentData={setContinentData}
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
