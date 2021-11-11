import React, { useState, useEffect } from 'react';
//css
import './StatisticsBoard.css'
import './StatsTotals.css'
//components
import StatsTotals from './StatsTotals';
import CountryStats from './CountryStats';
import ContinentStats from './ContinentStats';
import VaccineStats from './VaccineStats';

const StatisticsBoard = ({ countryData, continentData, vaccineData }) => {

    //set states on load 
    useEffect(() => {
        fetchTotalCases();
        fetchTotalCasesToday();
        fetchTotalDeaths();
        fetchTotalDeathsToday();
    }, [])

    // state constants
    const [cases, setCases] = useState('');
    const [casesToday, setCasesToday] = useState('');
    const [deaths, setDeaths] = useState('');
    const [deathsToday, setDeathsToday] = useState('');

    // functions 
    const fetchTotalCases = () => {
        return fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => setCases(data.cases));  
    };

    const fetchTotalCasesToday = () => {
        return fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => setCasesToday(data.todayCases));      
    }

    const fetchTotalDeaths = () => {
        return fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => setDeaths(data.deaths));      
    }

    const fetchTotalDeathsToday = () => {
        return fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => setDeathsToday(data.todayDeaths));      
    }

    return (
        <div className='stats-board'>
            <StatsTotals 
                cases={cases}
                casesToday={casesToday}
                deaths={deaths}
                deathsToday={deathsToday}
            />
            <div className='stats-breakdown-container'>
                { countryData && <CountryStats countryData={countryData} /> }
                { continentData && <ContinentStats continentData={continentData} /> }
                { vaccineData && <VaccineStats vaccineData={vaccineData} />}
            </div>
        </div>
    )
};

export default StatisticsBoard;