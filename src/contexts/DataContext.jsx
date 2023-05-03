import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // state constants
  const [continentData, setContinentData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [vaccineData, setVaccineData] = useState(null);
  const [countryCSVData, setCountryCSVData] = useState(null);

  // functions
  const checkContinents = () => {
    setCountryData(null);
    setVaccineData(null);
    return fetch("https://disease.sh/v3/covid-19/continents")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setContinentData(data);
      });
  };

  const checkCountries = () => {
    setContinentData(null);
    setVaccineData(null);
    return fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setCountryData(data);
      });
  };

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
        checkContinents,
        checkCountries,
        checkVaccines,
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
