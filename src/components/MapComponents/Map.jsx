import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";

import { useData } from "../../contexts";

export const Map = () => {
  const { combinedCountryData, combinedContinentData, showComponent } =
    useData();

  const mapStyle = {
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    const name = country.properties.ADMIN;
    const cases = country.casesPerOneMillion;
    layer.options.fillColor = country.casesPerMillColour;
    layer.bindPopup(`${name} Cases Per One Million: ${cases}`);
  };

  const onEachContinent = (continent, layer) => {
    const name = continent.continent;
    const cases = continent.casesPerOneMillion;
    layer.options.fillColor = continent.casesPerMillColour;
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
        <GeoJSON
          data={combinedContinentData}
          style={mapStyle}
          onEachFeature={onEachContinent}
        />
      )}
    </MapContainer>
  );
};
