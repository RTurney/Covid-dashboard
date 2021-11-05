import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import Circles from './Circles';

const Map = ({ continentData }) => {

    return (
    <MapContainer className='map-container' center={[0, 0]} zoom={2}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       { continentData && <Circles continentData={continentData} /> }
    </MapContainer>
    )
};

export default Map;