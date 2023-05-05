import React, { createContext, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({
  children,
  continentData,
  countriesData,
  statisticsData,
  graphData,
  combinedData,
  showComponent,
  setShowComponent,
}) => {
  return (
    <DataContext.Provider
      value={{
        continentData,
        // setContinentData,
        // setCountryData,
        covidStats: statisticsData,
        graphData,
        countryData: countriesData,
        // setCountryCovidData,
        // setContinentCovidData,
        combinedCountryData: combinedData,
        showComponent,
        setShowComponent,
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
