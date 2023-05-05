import React, { useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";

import { useData } from "../../contexts";
import { features } from "../../data/continents.json";

export const Map = () => {
  const { combinedCountryData, showComponent } = useData();

  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    const name = country.country;
    const cases = country.casesPerOneMillion;
    layer.options.fillColor = country.casesPerMillColour;
    layer.bindPopup(`${name} Cases Per One Million: ${cases}`);
  };

  return (
    <MapContainer
      center={[10, 10]}
      zoom={2}
      minZoom={1}
      maxBounds={[
        [80, -180],
        [-80, 180],
      ]}
    >
      {showComponent === "countries" && (
        <GeoJSON
          data={combinedCountryData}
          style={mapStyle}
          onEachFeature={onEachCountry}
        />
      )}
      {showComponent === "continents" && (
        <GeoJSON data={features} style={mapStyle} />
      )}
    </MapContainer>
  );
};
