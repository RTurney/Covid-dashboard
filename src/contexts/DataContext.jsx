import React, { createContext, useContext, useEffect, useState } from "react";

import {
  fetchCountriesCovidData,
  fetchContinentsCovidData,
  fetchStatistics,
  fetchGraphData,
} from "../api";
import { features } from "../data/countries.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // state constants
  const [continentData, setContinentData] = useState(null);
  const [countryData, setCountryData] = useState([]);
  const [combinedCountryData, setCombinedCountryData] = useState([]);
  const [covidStats, setCovidStats] = useState({
    cases: "",
    todayCases: "",
    deaths: "",
    todayDeaths: "",
  });
  const [graphData, setGraphData] = useState({
    cases: {},
    deaths: {},
  });

  // load country data functions
  const setCountryCovidData = async () => {
    setContinentData(null);
    const data = await fetchCountriesCovidData();
    setCountryData(data);
  };

  const combineData = () => {
    const combinedData = features.map((country) => {
      country.country = "";
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

  const setContinentCovidData = async () => {
    setCountryData(null);
    const data = await fetchContinentsCovidData();
    setContinentData(data);
  };

  // stats function
  const setStatisticsData = async () => {
    const data = await fetchStatistics();
    setCovidStats(data);
  };

  // graph functions
  const setGraphCovidData = async () => {
    const data = await fetchGraphData();
    setGraphData(data);
  };

  useEffect(() => {
    setCountryCovidData();
    setStatisticsData();
    setGraphCovidData();
    setCombinedCountryData(combineData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryData]);

  return (
    <DataContext.Provider
      value={{
        continentData,
        setContinentData,
        setCountryData,
        covidStats,
        graphData,
        setCountryCovidData,
        setContinentCovidData,
        combinedCountryData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within DataProvider");
  }
  return context;
};
