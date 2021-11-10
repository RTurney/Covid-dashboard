import React, { useState, useEffect } from 'react';
import CaseGraph from './GraphComponents/CaseGraph';
import DeathGraph from './GraphComponents/DeathGraph';
import VaccinesGraph from './GraphComponents/VaccinesGraph';

const GraphBoard = () => {

    // fetch on load 
    useEffect(() => {
        fetchCasesData();
        fetchDeathsData();
        fetchVaccineData();
    }, [])

    // state variables 
    const [casesData, setCasesData] = useState(null)
    const [deathsData, setDeathsData] = useState(null)
    const [vaccinesData, setVaccinesData] = useState(null)

    // functions
    const fetchCasesData = async () => {
        return fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=10")
            .then((response) => response.json())
            .then((data) => setCasesData(data.cases))  
    };
    const fetchDeathsData = async () => {
        return fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=10")
            .then((response) => response.json())
            .then((data) => setDeathsData(data.deaths))  
    };
    const fetchVaccineData = async () => {
        return fetch("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=10")
            .then((response) => response.json())
            .then((data) => setVaccinesData(data))  
    };

    return (
        <div className='graph-board'>
            {casesData && <CaseGraph casesData={casesData} /> }
            {deathsData && <DeathGraph deathsData={deathsData} /> }
            {vaccinesData && <VaccinesGraph vaccinesData={vaccinesData} /> }
        </div>
    )

};

export default GraphBoard;