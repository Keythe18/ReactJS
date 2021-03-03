import { useState, useEffect } from "react";
import Roue from "./Components/Roue";

function App() {
  const [box1, setBox1] = useState("1");
  const [box2, setBox2] = useState("2");
  const [box3, setBox3] = useState("3");
  const [win, setWin] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (box1 === box2 && box2 === box3) {
      setWin(true);
      setCount((count) => count + 1);
    } else {
      setWin(false);
    }
  }, [box1, box2, box3]);

  const playButton = () => {
    setBox1(Math.floor(Math.random() * 3) + 1);
    setBox2(Math.floor(Math.random() * 3) + 1);
    setBox3(Math.floor(Math.random() * 3) + 1);
  };

  const resetButton = () => {
    setCount(0);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "40px",
          maxWidth: "400px",
          justifyContent: "space-between",
        }}
      >
        <Roue box={box1} />
        <Roue box={box2} />
        <Roue box={box3} />
      </div>

      <div style={{ marginLeft: "215px" }}>
        <button
          style={{ padding: "4px 10px", borderRadius: "3px" }}
          onClick={playButton}
        >
          Play
        </button>
        <br />
        <br />

        <div>Score: {count}</div>
        <br />
        <button
          style={{ padding: "4px 10px", borderRadius: "3px" }}
          onClick={resetButton}
        >
          Reset
        </button>
      </div>

      {win === true ? <div style={{ marginLeft: "221px" }}>Win !</div> : ""}
    </>
  );
}

export default App;

// import { useState } from "react";
// import Affichage from "./Components/Affichage";
// import Clavier from "./Components/Clavier";

// function App() {
//   const [nbr, setNbr] = useState("");

//   return (
//     <div
//       style={{
//         width: "71px",
//         border: "2px solid lightgrey",
//       }}
//       className="App"
//     >
//       <Affichage nbr={nbr} />
//       <Clavier nbr={nbr} setNbr={setNbr} />
//     </div>
//   );
// }

// export default App;

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
