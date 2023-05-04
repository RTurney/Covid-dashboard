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

  const { checkVaccines, setCountryCovidData, continentCovidApiCall } =
    useData();

  return (
    <div className="nav-Bar">
      <h1 className="title">Global Covid Statistics Dashboard</h1>
      <div className="navbar-display">
        <div className="totals-group">
          <button onClick={continentCovidApiCall}>Continents data</button>
          <button onClick={setCountryCovidData}>Countries data</button>
          <button onClick={checkVaccines}>Vaccines data</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
