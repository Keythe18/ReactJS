import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Acceuil</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Portfolio">Portfolio</Link>
    </nav>
  );
};

export default Navbar;
