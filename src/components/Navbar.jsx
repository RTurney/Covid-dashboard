import React from "react";
// context
import { useData } from "../contexts";
// css
import "../styles/NavBar.css";

const Navbar = () => {
  const { setCountryCovidData, setContinentData } = useData();

  return (
    <div className="nav-Bar">
      <h1 className="title">Global Covid Statistics Dashboard</h1>
      <div className="navbar-display">
        <div className="totals-group">
          <button onClick={setContinentData}>Continents data</button>
          <button onClick={setCountryCovidData}>Countries data</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
