import React from 'react';

const CountryStats = ({ countryData }) => {
    return (
        <div className='stats-breakdown-container'>
            <div className='stats-breakdown'>
                {countryData.map((country, i) => {
                    return (
                        <div className='country' key={i}>
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