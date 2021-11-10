import React from 'react';

const StatsTotals = ({ cases, casesToday, deaths, deathsToday }) => {
    return (
        <div className='totals'>
                <p> {cases} </p>
                <p> {casesToday} </p>
                <p> {deaths} </p>
                <p> {deathsToday} </p>
        </div>
    )
};

export default StatsTotals;