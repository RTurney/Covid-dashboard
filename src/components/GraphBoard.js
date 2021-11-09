import React, { useState, useEffect } from 'react';
import CaseGraph from './CaseGraph';
import DeathGraph from './DeathGraph';

const GraphBoard = () => {

    // fetch on load 
    useEffect(() => {
        fetchCasesData();
        fetchDeathsData();
    }, [])

    // state variables 
    const [casesData, setCasesData] = useState(null)
    const [deathsData, setDeathsData] = useState(null)

    // functions
    const fetchCasesData = async () => {
        return fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=10")
            .then((response) => response.json())
            .then((data) => setCasesData(data.cases))  
    };
     const fetchDeathsData = async () => {
        return fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30")
            .then((response) => response.json())
            .then((data) => setDeathsData(data.deaths))  
    };

    return (
        <div className='graph-board'>
            {casesData && <CaseGraph casesData={casesData} /> }
            {deathsData && <DeathGraph deathsData={deathsData} /> }
        </div>
    )

};

export default GraphBoard;