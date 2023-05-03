import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import { features } from "../../data/countries.json";

const Map = () => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    const name = country.properties.ADMIN;
    layer.bindPopup(`${name}`);
  };

  return (
    <MapContainer center={[10, 10]} zoom={2}>
      <GeoJSON data={features} style={mapStyle} onEachFeature={onEachCountry} />
    </MapContainer>
  );
};

export default Map;
