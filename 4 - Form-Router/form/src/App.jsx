// package.json = >   "homepage":"./public/cloudcampus", basename path dans router aussi (index.d.ts) + basename="/public/cloudcampus"
// npm run build
//htc access si router est active

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.css";
import { Helmet } from "react-helmet";
import Navbar from "./Template/Navbar";
import Contact from "./Views/Contact";
import Homepage from "./Views/Homepage";
import Footer from "./Template/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/portfolio">
            <h1>Portfolio</h1>
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Homepage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;

// import { useState } from "react";
// import React from "react";
// import { ChromePicker } from "react-color";

// function App() {
//   const [color, setColor] = useState("#fff");

//   const handleChange = (color) => {
//     setColor(color.hex);
//   };
//   return (
//     <>
//       <div>
//         <ChromePicker color={color} onChange={handleChange} />
//       </div>

//       <div
//         style={{
//           width: "200px",
//           height: "200px",
//           marginTop: "20px",
//           background: color,
//         }}
//       ></div>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";

// import Form from "./Components/Form";
// import DisplayForm from "./Components/DisplayForm";

// function App() {

//   const [inputValue, setInputValue] = useState("");
//   const [display, setDisplay] = useState('')

//   return (
//     <div>
//       <Form inputValue={inputValue} setInputValue={setInputValue} setDisplay={setDisplay}/>
//       <br/>
//       <DisplayForm display={display}/>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [nbr] = useState(Math.floor(Math.random() * 101));
//   const [inputValue, setInputValue] = useState("");
//   const [etat, setEtat] = useState("");
//   const [count, setCount] = useState(1);

//   const checkNbr = (guess) => {
//     if (guess > nbr) {
//       setEtat("C'est moins");
//     } else if (guess < nbr) {
//       setEtat("C'est plus");
//     } else {
//       setEtat("Bravo! Reussi en " + count + " coups");
//       setInputValue("");
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setCount((count) => count + 1);
//     checkNbr(inputValue);
//     console.log("nbr : " + nbr);
//   };

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={handleChange} value={inputValue} />
//         <button>Clic</button>
//       </form>
//       <h1>{etat}</h1>
//     </div>
//   );
// }

// export default App;

// function App() {

//   const handleSubmit = (event) => {
//     event.preventDefault()

//     console.log('submited')
//   }

//   return (
//     <div >
//       <form onSubmit={handleSubmit}>
//         <input type='text'/>
//         <button>Allo</button>
//       </form>
//     </div>
//   );
// }

// export default App;
