import React from "react";
import { Circle, Popup } from "react-leaflet";

export const ContinentCircles = ({ continentData }) => {
  return continentData.map((continent, i) => {
    return (
      <Circle
        key={i}
        center={[
          continent.continentInfo.lat,
          continent.continentInfo.long + 50
        ]}
        radius={500 * Math.sqrt(continent.cases)}
        onMouseOver={(e) => {
          e.target.openPopup();
        }}
        onMouseOut={(e) => {
          e.target.closePopup();
        }}
      >
        <Popup>
          Continent:
          <br />
          {continent.continent}
          <br />
          Total cases:
          <br />
          {continent.cases}
          <br />
          Total deaths:
          <br />
          {continent.deaths}
        </Popup>
      </Circle>
    );
  });
};
