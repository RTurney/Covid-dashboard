import React, { useEffect } from "react";
// css
import "../../styles/GraphBoard.css";
// components
import { CaseGraph, VaccinesGraph, DeathGraph } from "./Graphs";
import { useData } from "../../contexts";

const GraphBoard = () => {
  const {
    casesData,
    deathsData,
    vaccinesData,
    fetchCasesData,
    fetchDeathsData,
    fetchVaccineData,
  } = useData();

  // fetch on load
  useEffect(() => {
    fetchCasesData();
    fetchDeathsData();
    fetchVaccineData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="graph-board">
      {casesData && <CaseGraph casesData={casesData} />}
      {deathsData && <DeathGraph deathsData={deathsData} />}
      {vaccinesData && <VaccinesGraph vaccinesData={vaccinesData} />}
    </div>
  );
};

export default GraphBoard;
