import React from "react";

export const StatsTotals = ({ cases, casesToday, deaths, deathsToday }) => {
  return (
        <div className='totals'>
            <div className='totals-data' >
                <p className='totals-title' >Total Cases:</p>
                <p className='data' > {cases} </p>
            </div>
            <div className='totals-data' >
                <p className='totals-title' >Total Cases today:</p>
                <p className='data' > {casesToday} </p>
            </div>
            <div className='totals-data' >
                <p className='totals-title' >Total Deaths:</p>
                <p className='data' > {deaths} </p>
            </div>
            <div className='totals-data' >
                <p className='totals-title' >Total Deaths today:</p>
                <p className='data' > {deathsToday} </p>
            </div>
        </div>
  );
};
