import React, { createContext, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  return <DataContext.Provider>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within DataProvider");
  }
  return context;
};
