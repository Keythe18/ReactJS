import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Acceuil</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
