import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
// components
import {
  VaccineCircles,
  CountryCircles,
  ContinentCircles,
} from "./CircleComponents";
import { useData } from "../../contexts";

const Map = () => {
  const { continentData, countryData, vaccineData, countryCSVData } = useData();

  return (
    <MapContainer className="map-container" center={[10, 10]} zoom={2.2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {continentData && <ContinentCircles continentData={continentData} />}
      {countryData && <CountryCircles countryData={countryData} />}
      {vaccineData && (
        <VaccineCircles
          vaccineData={vaccineData}
          countryCSVData={countryCSVData}
        />
      )}
    </MapContainer>
  );
};

export default Map;
