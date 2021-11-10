import React, { useState } from 'react'
import './App.css';


//components
import Navbar from './components/Navbar';
import Display from './components/Display';
import Map from './components/Map';
import StatisticsBoard from './components/StatisticsBoard';
import GraphBoard from './components/GraphBoard';

function App() {

  //state constants 
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
      <Display />
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
    </div>
  );
}

export default App;
