import React, { useState } from 'react'
import './App.css';

//components
import Navbar from './components/Navbar';
import Display from './components/Display';
import Map from './components/Map';
import StatisticsBoard from './components/StatisticsBoard';
import CaseGraph from './components/CaseGraph';

function App() {

  //state constants 
  const [continentData, setContinentData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
             <Navbar  
              setContinentData={setContinentData} 
              setCountryData={setCountryData} 
             />
      </header>
      <Display />
      <div className='dashboard'>
        <StatisticsBoard 
          countryData={countryData} 
          continentData={continentData}
        />
        <Map 
          continentData={continentData} 
          countryData={countryData}
        />
        <CaseGraph />
      </div>
    </div>
  );
}

export default App;
