import React from 'react';
import { Circle, Popup } from 'react-leaflet';

const CountryCircles = ({ countryData }) => {
    
    return (
        countryData.map((country, i) => {
                return (
                    <Circle 
                    key={i}
                    center={[country.countryInfo.lat, country.countryInfo.long]}
                    radius={500 * Math.sqrt(country.casesPerOneMillion)}
                    onMouseOver={(e) => { e.target.openPopup()}}
                    onMouseOut={(e) => { e.target.closePopup()}}
                    >
                        <Popup>
                            Country:
                            <br />
                            {country.country}
                            <br />
                            Total cases:
                            <br />
                            {country.cases}
                            <br />
                            Total deaths:
                            <br />
                            {country.deaths}
                        </Popup>
                    </Circle>
                )
        })
    );
};  

export default CountryCircles;