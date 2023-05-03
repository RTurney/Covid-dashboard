import React, { useEffect } from "react";
//context
import { useData } from "../contexts";
// css
import "../styles/NavBar.css";

const Navbar = () => {
  // effects
  useEffect(() => {
    checkCountries();
    // eslint-disable-next-line
  }, []);

  const { checkContinents, checkCountries, checkVaccines } = useData();

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
