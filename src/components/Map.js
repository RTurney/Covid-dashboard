import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import ContinentCircles from './ContinentCircles';
import CountryCircles from './CountryCircles';

const Map = ({ continentData, countryData }) => {

    return (
    <MapContainer className='map-container' center={[10, 10]} zoom={2.2}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       { continentData && <ContinentCircles continentData={continentData} /> }
       { countryData && <CountryCircles countryData={countryData} /> }
    </MapContainer>
    )
};

export default Map;