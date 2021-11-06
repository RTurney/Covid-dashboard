import React from 'react';
//css
import './CountryStats.css'

const CountryStats = ({ countryData }) => {
    return (
        <div className='another-div'>
            <div className='stats-breakdown'>
                {countryData.map(country => {
                    return (
                        <div className='country'>
                            <p>{country.country}</p>
                            <li>Total cases: {country.cases}</li>
                            <li>Total deaths: {country.deaths}</li>
                        </div>
                    )
                })}
            </div>
        </div>
            
    );
};

export default CountryStats;