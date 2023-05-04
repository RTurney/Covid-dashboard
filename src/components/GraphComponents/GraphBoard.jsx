import React, { useEffect } from "react";
// css
import "../../styles/GraphBoard.css";
// components
import { CaseGraph, VaccinesGraph, DeathGraph } from "./Graphs";
import { useData } from "../../contexts";

const GraphBoard = () => {
  const {
    vaccinesData,
    fetchVaccineData,
    graphData, 
    fetchGraphData,
  } = useData();

  // fetch on load
  useEffect(() => {
    fetchGraphData();
    fetchVaccineData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="graph-board">
      {graphData && <CaseGraph casesData={graphData.cases} />}
      {graphData && <DeathGraph deathsData={graphData.deaths} />}
      {/* {vaccinesData && <VaccinesGraph vaccinesData={vaccinesData} />} */}
    </div>
  );
};

export default GraphBoard;
