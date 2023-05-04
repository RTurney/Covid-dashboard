import React, { createContext, useContext, useState } from "react";
import {
  fetchCountriesCovidData,
  fetchContinentsCovidData,
  fetchStatistics,
} from "../api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // state constants
  const [continentData, setContinentData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [vaccineData, setVaccineData] = useState(null);
  const [countryCSVData, setCountryCSVData] = useState(null);
  const [vaccinesData, setVaccinesData] = useState(null);
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
    setVaccineData(null);
    const data = await fetchCountriesCovidData();
    setCountryData(data);
  };

  const continentCovidApiCall = async () => {
    setCountryData(null);
    setVaccineData(null);
    const data = await fetchContinentsCovidData();
    setContinentData(data);
  };

  // broken gateway currently. Pending functionality until fixed
  const checkVaccines = () => {
    setContinentData(null);
    setCountryData(null);
    return fetch(
      "https://disease.sh/v3/covid-19/vaccine/coverage/countries?fullData=true"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setVaccineData(data);
      });
  };

  // stats function

  const setStatisticsData = async () => {
    const data = fetchStatistics();
    setCovidStats(data);
  };

  // graph functions
  const fetchGraphData = async () => {
    return fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=200")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setGraphData(data);
      });
  };

  // error with vaccine data pausing functionality for now
  const fetchVaccineData = async () => {
    return fetch("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=200")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setVaccinesData(data);
      });
  };

  return (
    <DataContext.Provider
      value={{
        continentData,
        setContinentData,
        countryData,
        setCountryData,
        vaccineData,
        setVaccineData,
        countryCSVData,
        setCountryCSVData,
        checkVaccines,
        vaccinesData,
        fetchVaccineData,
        covidStats,
        fetchGraphData,
        graphData,
        setCountryCovidData,
        continentCovidApiCall,
        setStatisticsData,
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
