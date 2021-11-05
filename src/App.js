import React, { useState } from 'react'
import './App.css';

//components
import DataTest from './components/FetchTest';
import Display from './components/Display';
import Map from './components/Map';


function App() {

  //state constants 
  const [display, setDisplay] = useState('');
  const [continentData, setContinentData] = useState([]);
  const [countryData, setCountryData] = useState([]);


  return (
    <div className="App">
      <header className="App-header">
       <h1>Covid Statistics Dashboard</h1>
      </header>
      <DataTest setDisplay={setDisplay} setContinentData={setContinentData} setCountryData={setCountryData} />
      <Display display={display}/>
      <Map continentData={continentData} countryData={countryData}/>
    </div>
  );
}

export default App;
