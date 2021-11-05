import React from "react";

const DataTest = ({ setDisplay, setContinentData, setCountryData }) => {
    

    const fetchTotalCases = () => {
        return fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => setDisplay("The total number of cases to date is: " + data.cases));  
    };

    const fetchTotalCasesToday = () => {
        return fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => setDisplay("The total number of cases today is: " + data.todayCases));      
    }

    const fetchTotalDeaths = () => {
        return fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => setDisplay("The total number of deaths to date is: " + data.deaths));      
    }

    const fetchTotalDeathsToday = () => {
        return fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => setDisplay("The total number of deaths today is: " + data.todayDeaths));      
    }

    const checkContinents = () => {
        setCountryData([]);
        return (
            fetch("https://disease.sh/v3/covid-19/continents")
            .then((response) => response.json())
            .then((data) => setContinentData(data))

        )
    };

    const checkCountries = () => {
        setContinentData([]);
        return (
            fetch("https://disease.sh/v3/covid-19/countries")
            .then((response) => response.json())
            .then((data) => setCountryData(data))
        )
    }



    return (
        <div>
            <button onClick={fetchTotalCases} >Total cases</button>
            <button onClick={fetchTotalCasesToday} >Total cases today</button>
            <button onClick={fetchTotalDeaths} >Total deaths</button>
            <button onClick={fetchTotalDeathsToday} >Total deaths today</button>
            <br />
            <button onClick={checkContinents}>Continents data</button>
            <button onClick={checkCountries}>Countries data</button>
        </div>
    );
};

export default DataTest;