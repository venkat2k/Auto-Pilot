import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Header = () => {
  return (
    <header className="demo__footer">
      <button aria-label="Footer Menu">
        <span />
      </button>
      <div className="demo__menu">
        <Link to="/">Home</Link>
        <Link to="/controlled">Portfolio</Link>
        <Link to="/admin/heatmap">Heatmap</Link>
        <Link to="/bugreport">Report Bug</Link>
      </div>
    </header>
  );
};

export default Header;
