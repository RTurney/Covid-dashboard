import React, { useEffect } from "react";
//context
import { useData } from "../contexts";
// css
import "../styles/NavBar.css";

const Navbar = () => {
  // effects
  useEffect(() => {
    setCountryCovidData();
    // eslint-disable-next-line
  }, []);

  const { setCountryCovidData, setContinentCovidData } = useData();

  return (
    <div className="nav-Bar">
      <h1 className="title">Global Covid Statistics Dashboard</h1>
      <div className="navbar-display">
        <div className="totals-group">
          <button onClick={setContinentCovidData}>Continents data</button>
          <button onClick={setCountryCovidData}>Countries data</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
