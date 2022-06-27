import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div
      className="table
    "
    >
      <ul id="horizontal-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/barchart">Barchart</Link>
        </li>
        <li>
          <Link to="/treemap">Treemap</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
