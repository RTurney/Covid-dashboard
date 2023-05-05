import React, { createContext, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({
  children,
  continentData,
  countriesData,
  statisticsData,
  graphData,
  combinedCountryData,
  combinedContinentData,
  showComponent,
  setShowComponent,
}) => {
  return (
    <DataContext.Provider
      value={{
        continentData,
        covidStats: statisticsData,
        graphData,
        countryData: countriesData,
        combinedCountryData,
        combinedContinentData,
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
