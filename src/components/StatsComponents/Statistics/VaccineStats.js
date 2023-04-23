import React from 'react';

export const VaccineStats = ({ vaccineData }) => {
    return (
        <div className='stats-breakdown-container'>
            <div className='stats-breakdown'>
                {vaccineData.map((country, i) => {
                    return (
                        <div className='vaccinations' key={i}>
                            <p className='item-title'>{country.country}</p>
                            <li className='vaccination-numbers' >Total Vaccinations: {country.timeline[29].total}</li>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
