import React from "react";
// css
import "../../styles/StatisticsBoard.css";
import "../../styles/StatsTotals.css";
// components
import { ContinentStats, CountryStats, StatsTotals } from "./Statistics";
import { useData } from "../../contexts";

export const StatisticsBoard = () => {
  // state constants
  const { continentData, covidStats, combinedCountryData } = useData();

  return (
    <div className="stats-board">
      <StatsTotals
        cases={covidStats.cases}
        casesToday={covidStats.todayCases}
        deaths={covidStats.deaths}
        deathsToday={covidStats.todayDeaths}
      />
      <div className="stats-breakdown-container">
        {combinedCountryData && (
          <CountryStats countryData={combinedCountryData} />
        )}
        {continentData && <ContinentStats continentData={continentData} />}
      </div>
    </div>
  );
};
