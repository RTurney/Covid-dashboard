import React from "react";
// css
import "../../styles/GraphBoard.css";
// components
import { CaseGraph, DeathGraph } from "./Graphs";
import { useData } from "../../contexts";

export const GraphBoard = () => {
  const { graphData } = useData();

  return (
    <div className="graph-board">
      {graphData && <CaseGraph casesData={graphData.cases} />}
      {graphData && <DeathGraph deathsData={graphData.deaths} />}
    </div>
  );
};
