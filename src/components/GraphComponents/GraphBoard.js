import React, { useState, useEffect } from "react";
// css
import "../../styles/GraphBoard.css";
// components
import { CaseGraph, VaccinesGraph, DeathGraph } from "./Graphs";

const GraphBoard = () => {
  // fetch on load
  useEffect(() => {
    fetchCasesData();
    fetchDeathsData();
    fetchVaccineData();
  }, []);

  // state variables
  const [casesData, setCasesData] = useState(null);
  const [deathsData, setDeathsData] = useState(null);
  const [vaccinesData, setVaccinesData] = useState(null);

  // functions
  const fetchCasesData = async () => {
    return fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=200")
      .then((response) => { return response.json(); })
      .then((data) => { return setCasesData(data.cases); });
  };
  const fetchDeathsData = async () => {
    return fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=200")
      .then((response) => { return response.json(); })
      .then((data) => { return setDeathsData(data.deaths); });
  };
  const fetchVaccineData = async () => {
    return fetch("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=200")
      .then((response) => { return response.json(); })
      .then((data) => { return setVaccinesData(data); });
  };

  return (
    <div className="graph-board">
      {casesData && <CaseGraph casesData={casesData} />}
      {deathsData && <DeathGraph deathsData={deathsData} />}
      {vaccinesData && <VaccinesGraph vaccinesData={vaccinesData} />}
    </div>
  );
};

export default GraphBoard;
