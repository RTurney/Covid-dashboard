import React, { useEffect } from "react";
// css
import "../../styles/StatisticsBoard.css";
import "../../styles/StatsTotals.css";
// components
import {
  VaccineStats,
  ContinentStats,
  CountryStats,
  StatsTotals,
} from "./Statistics";
import { useData } from "../../contexts";

const StatisticsBoard = () => {
  // state constants
  const {
    countryData,
    continentData,
    vaccineData,
    covidStats,
    setStatisticsData,
  } = useData();

  // set states on load
  useEffect(() => {
    setStatisticsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="stats-board">
      <StatsTotals
        cases={covidStats.cases}
        casesToday={covidStats.todayCases}
        deaths={covidStats.deaths}
        deathsToday={covidStats.todayDeaths}
      />
      <div className="stats-breakdown-container">
        {countryData && <CountryStats countryData={countryData} />}
        {continentData && <ContinentStats continentData={continentData} />}
        {vaccineData && <VaccineStats vaccineData={vaccineData} />}
      </div>
    </div>
  );
};

export default StatisticsBoard;
