import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/init">LogInOrSignUp</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home/profile">Profile</Link>
          </li>
          <li>
            <Link to="/home/unranked">Unranked</Link>
          </li>
          <li>
            <Link to="/home/dev">ProDev</Link>
          </li>
          <li>
            <Link to="/home/custom">CustomRoom</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
