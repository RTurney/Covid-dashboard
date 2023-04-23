import React, { useState } from 'react'
import './components/styles/App.css';


//components
import Navbar from './components/Navbar';
import Display from './components/Display';
import Map from './components/MapComponents/Map';
import StatisticsBoard from './components/StatsComponents/StatisticsBoard';
import GraphBoard from './components/GraphComponents/GraphBoard';

function App() {

  //state constants 
  // a new line
  const [continentData, setContinentData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [vaccineData, setVaccineData] = useState(null)
  const [countryCSVData, setCountryCSVData] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
          <Navbar  
          setContinentData={setContinentData} 
          setCountryData={setCountryData} 
          setVaccineData={setVaccineData}
          />
      </header>
      <div className='dashboard'>
        <StatisticsBoard 
          countryData={countryData} 
          continentData={continentData}
          vaccineData={vaccineData}
        />
        <Map 
          continentData={continentData} 
          countryData={countryData}
          vaccineData={vaccineData}
          countryCSVData={countryCSVData}
          setCountryCSVData={setCountryCSVData}
        />
        <GraphBoard />
      </div>
      <Display />
    </div>
  );
}

export default App;
