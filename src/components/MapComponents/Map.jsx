import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";

import { useData } from "../../contexts";

export const Map = () => {
  const { combinedCountryData } = useData();

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
      {combinedCountryData && (
        <GeoJSON
          data={combinedCountryData}
          style={mapStyle}
          onEachFeature={onEachCountry}
        />
      )}
    </MapContainer>
  );
};
