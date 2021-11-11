import React from 'react';

const ContinentStats = ({ continentData }) => {
    return (
        <div className='stats-breakdown-container'>
            <div className='stats-breakdown'>
                {continentData.map((continent, i) => {
                    return (
                        <div className='continent' key={i}>
                            <p className='item-title'>{continent.continent}</p>
                            <li className='cases' >Total cases: {continent.cases}</li>
                            <li className='deaths' >Total deaths: {continent.deaths}</li>
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default ContinentStats;