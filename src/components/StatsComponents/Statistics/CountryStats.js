import React from "react";

export const CountryStats = ({ countryData }) => {
  return (
        <div className='stats-breakdown-container'>
            <div className='stats-breakdown'>
                {countryData.map((country, i) => {
                  return (
                        <div className='country' key={i}>
                            <p className='item-title' >{country.country}</p>
                            <li className='cases' >Total cases: {country.cases}</li>
                            <li className='deaths' >Total deaths: {country.deaths}</li>
                        </div>
                  );
                })}
            </div>
        </div>

  );
};
