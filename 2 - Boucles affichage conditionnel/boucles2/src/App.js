import { useState } from "react";
import Divs from "./Components/Divs";
import DivsAlt from './Components/DivsAlt'

function App() {
  const [color, setColor] = useState('black');
  const [sizer, setSizer] = useState('100px');
  const clickFunc = () => {
    setColor('blue');
    setSizer(50);
  };
  return (
    <div>
      <div>
        <Divs clickFunc={clickFunc}/>
        <DivsAlt color={color} sizer={sizer}/>
      </div>
    </div>
  );
}

export default App;

/*import { useState } from "react";
import Divs from "./Components/Divs";
import DivsAlt from './Components/DivsAlt'

function App() {
  const [hider, setHider] = useState(true);
  const clickFunc = () => {
    setHider(false);
  };
  return (
    <div>
      <div>
        <Divs clickFunc={clickFunc}/>
        {hider ? <DivsAlt /> : ""}
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import Divs from "./Components/Divs";

// function App() {
//   const [compteur, setCompteur] = useState(0);

//   return (
//     <div>
//       Nb elements fermes : {compteur}
//       <div>
//         <Divs compteur={compteur} setCompteur={setCompteur}/>
//         <Divs compteur={compteur} setCompteur={setCompteur}/>
//         <Divs compteur={compteur} setCompteur={setCompteur}/>
//         <Divs compteur={compteur} setCompteur={setCompteur}/>
//         <Divs compteur={compteur} setCompteur={setCompteur}/>
//       </div>
//     </div>
//   );
// }

// export default App;

/*import { useState } from "react";
import Compteur from "./Components/Compteur";

function App() {
  const [compteur, setCompteur] = useState(0);
  const [color, setColor] = useState("red");
  const handleClick = () => {
    if (compteur + 1 === 10) {
      setColor("green");
    }
    setCompteur((compteur) => compteur + 1);
  };
  return (
    <div>
      <div
        style={{
          background: color,
          width: 400 + "px",
          height: 400 + "px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Compteur compteur={compteur} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;

--------------------

import { useState } from "react";

function App() {
  const [view, setView] = useState(true);
  const handleClick = () => {
    view ? setView(false) : setView(true);
  };

  return (
    <div>
      {view === true ? (
        <div
          style={{
            width: 100 + "px",
            height: 100 + "px",
            background: "orange",
          }}
        ></div>
      ) : (
        ""
      )}
      {!view && <div>Test</div>}
      <button
        style={{
          marginTop: 20 + "px",
        }}
        onClick={handleClick}
      >
        Pouf
      </button>
    </div>
  );
}

export default App;
*/
