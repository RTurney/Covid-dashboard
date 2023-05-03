import React, { useEffect } from "react";
//components

// css
import "../styles/NavBar.css";

const Navbar = ({ setContinentData, setCountryData, setVaccineData }) => {
  // effects
  useEffect(() => {
    checkCountries();
    // eslint-disable-next-line
  }, []);

  // functions
  const checkContinents = () => {
    setCountryData(null);
    setVaccineData(null);
    return fetch("https://disease.sh/v3/covid-19/continents")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setContinentData(data);
      });
  };

  const checkCountries = () => {
    setContinentData(null);
    setVaccineData(null);
    return fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setCountryData(data);
      });
  };

  const checkVaccines = () => {
    setContinentData(null);
    setCountryData(null);
    return fetch(
      "https://disease.sh/v3/covid-19/vaccine/coverage/countries?fullData=true"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setVaccineData(data);
      });
  };

  return (
    <div className="nav-Bar">
      <h1 className="title">Global Covid Statistics Dashboard</h1>
      <div className="navbar-display">
        <div className="totals-group">
          <button onClick={checkContinents}>Continents data</button>
          <button onClick={checkCountries}>Countries data</button>
          <button onClick={checkVaccines}>Vaccines data</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
