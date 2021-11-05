import React, { useState } from 'react'
import './App.css';

//components
import Navbar from './components/Navbar';
import Display from './components/Display';
import Map from './components/Map';


function App() {

  //state constants 
  const [display, setDisplay] = useState('Covid is still a global issue. Please be considerate of others');
  const [continentData, setContinentData] = useState([]);
  const [countryData, setCountryData] = useState([]);


  return (
    <div className="App">
      <header className="App-header">
             <Navbar 
             setDisplay={setDisplay} 
             setContinentData={setContinentData} 
             setCountryData={setCountryData} 
             />
      </header>
      <Display display={display}/>
      <Map 
      continentData={continentData} 
      countryData={countryData}
      />
    </div>
  );
}

export default App;
