import React, { useEffect } from 'react';
//css
import './NavBar.css' 

const Navbar = ({ setContinentData, setCountryData }) => {

    // effects 
    useEffect(() => {
        checkCountries();
        // eslint-disable-next-line
    }, []);

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
        <div className='nav-Bar'>
            <h1 className='title'>
                Global Covid Statistics Dashboard
            </h1>
            <div className='navbar-display'>
                <p>Display data by:</p>
                <button onClick={checkContinents}>Continents data</button>
                <button onClick={checkCountries}>Countries data</button>
            </div>
        </div>
    )
};

export default Navbar;
