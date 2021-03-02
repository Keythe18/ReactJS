import React, { useState } from "react";

const Compteur = ({compteur, handleClick}) => {

  return (
    <div
      style={{
        color: "white",
        fontSize: 60 + "px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {compteur}
      <button onClick={handleClick}>+ 1</button>
    </div>
  );
};

export default Compteur;
