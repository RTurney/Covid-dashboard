import React, { useState } from 'react'
import './App.css';
//components
import DataTest from './components/FetchTest';
import Display from './components/Display';

function App() {

  const [display, setDisplay] = useState('');

  return (
    <div className="App">
      <header className="App-header">
       <h1>Covid Statistics Dashboard</h1>
      </header>
      <DataTest setDisplay={setDisplay}/>
      <Display display={display}/>
    </div>
  );
}

export default App;
