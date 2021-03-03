import { useState } from "react";
import Affichage from "./Components/Affichage";
import Clavier from "./Components/Clavier";

function App() {
  const [nbr, setNbr] = useState("");

  return (
    <div
      style={{
        width: "71px",
        border: "2px solid lightgrey",
      }}
      className="App"
    >
      <Affichage nbr={nbr} />
      <Clavier nbr={nbr} setNbr={setNbr} />
    </div>
  );
}

export default App;

// import { useState } from "react";
// import Enfant from "./Components/Enfant";
// import Parent from "./Components/Parent";

// function App() {

//   const [etat, setEtat] = useState(false);
//   return (
//     <div className="App">
//       <Parent etat={etat} setEtat={setEtat}/>
//       <Enfant etat={etat} />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import Personnage from "./Components/Personnage";

// function App() {
//   const [nom, setNom] = useState("Lansucki");
//   const [prenom, setPrenom] = useState("Alexis");

//   const handleClick = () => {
//     setPrenom("Jo");
//   };
//   return (
//     <div className="App">
//       <Personnage nom={nom} prenom={prenom} />
//       {prenom !== "Jo" ? <Personnage prenom="Jo" nom="Lansucki"/> : ""}

//       <button onClick={handleClick}>oi</button>
//     </div>
//   );
// }

// export default App;
