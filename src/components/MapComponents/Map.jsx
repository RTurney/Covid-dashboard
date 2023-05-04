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
    const cases = country.cases;
    layer.bindPopup(`${name} Total cases: ${cases}`);
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
