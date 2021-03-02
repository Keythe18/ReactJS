import React, { useState } from "react";
import "./eleve.css";

const moyenne = (notes) => {
  let sum = 0;
  notes.forEach((note) => {
    sum += note;
  });

  return Math.round(sum / notes.length);
};

const Eleve = ({ nom, prenom, notes }) => {
  const [backgroundColor, setBackgroundColor] = useState("normal");

  const clicBtn = () => {
    setBackgroundColor("lightgreen");
  };
  return (
    <div
      className="styleEleve"
      style={{
        background: backgroundColor,
      }}
    >
      <h1>
        {nom} {prenom}
      </h1>
      <h2>{moyenne(notes)}</h2>
      <button style={{ background: backgroundColor }} onClick={clicBtn}>
        Valider
      </button>
      <br />
    </div>
  );
};

export default Eleve;
