import React, { createContext, useContext, useState } from "react";
import {
  fetchCountriesCovidData,
  fetchContinentsCovidData,
  fetchStatistics,
  fetchGraphData,
} from "../api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // state constants
  const [continentData, setContinentData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [countryCSVData, setCountryCSVData] = useState(null);
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

  // map functions
  const setCountryCovidData = async () => {
    setContinentData(null);
    const data = await fetchCountriesCovidData();
    setCountryData(data);
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

  return (
    <DataContext.Provider
      value={{
        continentData,
        setContinentData,
        countryData,
        setCountryData,
        countryCSVData,
        setCountryCSVData,
        covidStats,
        graphData,
        setCountryCovidData,
        setContinentCovidData,
        setStatisticsData,
        setGraphCovidData,
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
