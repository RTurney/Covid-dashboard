import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // state constants
  const [continentData, setContinentData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [vaccineData, setVaccineData] = useState(null);
  const [countryCSVData, setCountryCSVData] = useState(null);

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
