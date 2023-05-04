import React, { createContext, useContext, useEffect, useState } from "react";
import Papa from "papaparse";

import {
  fetchCountriesCovidData,
  fetchContinentsCovidData,
  fetchStatistics,
  fetchGraphData,
} from "../api";
import CSVFile from "../data/world_data.csv";

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

  // load csv function
  const loadCountryCSV = () => {
    Papa.parse(CSVFile, {
      download: true,
      delimiter: ",",
      header: true,
      complete: (results) => {
        setCountryCSVData(results.data);
      },
    });
  };

  useEffect(() => {
    setCountryCovidData();
    setStatisticsData();
    setGraphCovidData();
    loadCountryCSV();
  }, []);

  return (
    <DataContext.Provider
      value={{
        continentData,
        setContinentData,
        countryData,
        setCountryData,
        countryCSVData,
        covidStats,
        graphData,
        setCountryCovidData,
        setContinentCovidData,
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
