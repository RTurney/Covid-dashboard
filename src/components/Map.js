import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import Circles from './Circles';
import CountryCircles from './CountryCircles';

const Map = ({ continentData, countryData }) => {

    return (
    <MapContainer className='map-container' center={[50, 10]} zoom={4}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       { continentData && <Circles continentData={continentData} /> }
       { countryData && <CountryCircles countryData={countryData} /> }
    </MapContainer>
    )
};

export default Map;