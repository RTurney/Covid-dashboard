import React, { useEffect } from "react";
// css
import "../../styles/GraphBoard.css";
// components
import { CaseGraph, DeathGraph } from "./Graphs";
import { useData } from "../../contexts";

const GraphBoard = () => {
  const { graphData, setGraphCovidData } = useData();

  // fetch on load
  useEffect(() => {
    setGraphCovidData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="graph-board">
      {graphData && <CaseGraph casesData={graphData.cases} />}
      {graphData && <DeathGraph deathsData={graphData.deaths} />}
    </div>
  );
};

export default GraphBoard;
