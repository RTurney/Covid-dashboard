import React from 'react';

const ContinentStats = ({ continentData }) => {
    return (
        <div className='stats-breakdown-container'>
            <div className='stats-breakdown'>
                {continentData.map((continent, i) => {
                    return (
                        <div className='continent' key={i}>
                            <p>{continent.continent}</p>
                            <li>Total cases: {continent.cases}</li>
                            <li>Total deaths: {continent.deaths}</li>
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default ContinentStats;