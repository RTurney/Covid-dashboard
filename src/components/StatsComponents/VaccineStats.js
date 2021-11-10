import React from 'react';

const VaccineStats = ({ vaccineData }) => {
    return (
        <div className='stats-breakdown-container'>
            <div className='stats-breakdown'>
                {vaccineData.map((country, i) => {
                    return (
                        <div className='vaccinations' key={i}>
                            <p>{country.country}</p>
                            <li>Total Vaccinations: {country.timeline[29].total}</li>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default VaccineStats;