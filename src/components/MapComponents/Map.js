import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import Papa from 'papaparse';
import ContinentCircles from './ContinentCircles';
import CountryCircles from './CountryCircles';
import VaccineCircles from './VaccineCircles';
//CSV file
import CSVFile from '../../world_data.csv'

const Map = ({ continentData, countryData, vaccineData, countryCSVData, setCountryCSVData }) => {
    // load csv file with country data 
    useEffect(() => {
      loadCountryCSV();
      // eslint-disable-next-line
    }, [])

    //functions 
    const loadCountryCSV = () => {
       Papa.parse(CSVFile, {
          download: true,
          delimiter: ",",
          header: true, 
          complete: results => {
          setCountryCSVData(results.data);
	      }
    });

    }
    return (
    <MapContainer className='map-container' center={[10, 10]} zoom={2.2}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       { continentData && <ContinentCircles continentData={continentData} /> }
       { countryData && <CountryCircles countryData={countryData} /> }
       { vaccineData && <VaccineCircles vaccineData={vaccineData} countryCSVData={countryCSVData} />}
    </MapContainer>
    )
};

export default Map;