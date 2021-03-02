import Eleve from "./Components/Eleve";
import { useState } from "react";

const eleves = [
  {
    nom: "Lansucki",
    prenom: "Alexis",
    notes: [15, 10, 8],
  },
  {
    nom: "Lansucki",
    prenom: "Joanna",
    notes: [12, 11, 7],
  },
  {
    nom: "Lansucki",
    prenom: "Fred",
    notes: [20, 16, 12],
  },
  {
    nom: "Lansucki",
    prenom: "Nadine",
    notes: [13, 12, 12],
  },
];

function App() {
  const [color, setColor] = useState("green");

  const clicBtn = () => {
    setColor("blue");
  };

  return (
    <>
      {eleves.map((personne, index) => (
        <Eleve
          key={index}
          nom={personne.nom}
          prenom={personne.prenom}
          notes={personne.notes}
        />
      ))}
    </>
  );
}

export default App;
