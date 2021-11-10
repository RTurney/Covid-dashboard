import React, { useEffect } from 'react';
//css
import './NavBar.css' 

const Navbar = ({ setContinentData, setCountryData, setVaccineData, setCountryCirclesOn }) => {

    // effects 
    useEffect(() => {
        checkCountries();
        // eslint-disable-next-line
    }, []);

    //functions
    const checkContinents = () => {
        setCountryData(null);
        setVaccineData(null);
        return (
            fetch("https://disease.sh/v3/covid-19/continents")
            .then((response) => response.json())
            .then((data) => setContinentData(data))

        )
    };

    const checkCountries = () => {
        setContinentData(null);
        setVaccineData(null);
        return (
            fetch("https://disease.sh/v3/covid-19/countries")
            .then((response) => response.json())
            .then((data) => setCountryData(data))
        )
    }

    const checkVaccines = () => {
        setContinentData(null);
        setCountryData(null);
        return (
            fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries?fullData=true")
            .then((response) => response.json())
            .then((data) => setVaccineData(data))
        )
    }

    return (
        <div className='nav-Bar'>
            <h1 className='title'>
                Global Covid Statistics Dashboard
            </h1>
            <div className='navbar-display'>
                <button onClick={checkContinents}>Continents data</button>
                <button onClick={checkCountries}>Countries data</button>
                <button onClick={checkVaccines}>Vaccines data</button>
            </div>
        </div>
    )
};

export default Navbar;
