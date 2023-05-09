import React from "react";
// context
import { useData } from "../contexts";
// css
import "../styles/NavBar.css";

export const Navbar = () => {
  const { setShowComponent } = useData();

  const showCountries = () => {
    setShowComponent("countries");
  };

  const showContinents = () => {
    setShowComponent("continents");
  };

  return (
    <div className="nav-Bar">
      <h1 className="title">Global Covid Statistics Dashboard</h1>
      <div className="navbar-display">
        <div className="totals-group">
          <button onClick={showContinents}>Continents data</button>
          <button onClick={showCountries}>Countries data</button>
        </div>
      </div>
    </div>
  );
};
