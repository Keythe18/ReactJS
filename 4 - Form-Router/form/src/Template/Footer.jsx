import React from "react";
import { Link } from "react-router-dom";

import './footer.css'

const footer = () => {
  return (
    <footer>
      <Link to="/">Acceuil</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Portfolio">Portfolio</Link>
    </footer>
  );
};

export default footer;
