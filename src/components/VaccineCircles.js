import React from 'react';
import { Circle, Popup } from 'react-leaflet';


const VaccineCircles = ( { vaccineData, countryCSVData } ) => {

    console.log(vaccineData);

    return (
        countryCSVData.map((country, i) => {
            let vaccineTotal = vaccineData.find(countryVacc => {
                return countryVacc.country === country.country;
            });

            if(vaccineTotal) {
                return (
                <Circle 
                    key={i}
                    center={[country.latitude, country.longitude]}
                    radius={50 * Math.sqrt(vaccineTotal.timeline[29].total)}
                    onMouseOver={(e) => { e.target.openPopup()}}
                    onMouseOut={(e) => { e.target.closePopup()}}
                    color='green'
                >
                     <Popup>
                        Country:
                        <br />
                        {country.country}
                        <br />
                        Total vaccinations: 
                        <br />
                        {vaccineTotal.timeline[29].total}
                    </Popup>  

                </Circle>
            )
            } else {
                return (
                    <Circle 
                    key={i}
                    center={[country.latitude, country.longitude]}
                    radius={10000}
                    onMouseOver={(e) => { e.target.openPopup()}}
                    onMouseOut={(e) => { e.target.closePopup()}}
                    color='yellow'
                >
                     <Popup>
                        Country:
                        <br />
                        {country.country}
                        <br />
                        No Vaccine data
                    </Popup>  

                </Circle>
                )
            }
        })
    )
};

export default VaccineCircles;