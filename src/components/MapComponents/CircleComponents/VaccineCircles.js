import React from 'react';
import { Circle, Popup, Marker } from 'react-leaflet';


export const VaccineCircles = ( { vaccineData, countryCSVData } ) => {

    return (
        //map over countryCSVdata to plot datapoints on map
        countryCSVData.map((country, i) => {
            let vaccineTotal = vaccineData.find(countryVacc => {
                return countryVacc.country === country.country;
            });
            //returns green circle with data if vaccine data available
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
                // returns a yellow circle with 'no data available' 
                return (
                    <Marker 
                    key={i}
                    position={[country.latitude, country.longitude]}
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

                </Marker>
                )
            }
        })
    )
};

