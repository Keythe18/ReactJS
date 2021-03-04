import Form from "./Components/Form";
import { useState } from "react";
import DisplayForm from "./Components/DisplayForm";

function App() {

  const [inputValue, setInputValue] = useState("");
  const [display, setDisplay] = useState('')

  return (
    <div>
      <Form inputValue={inputValue} setInputValue={setInputValue} setDisplay={setDisplay}/>
      <br/>
      <DisplayForm display={display} inputValue={inputValue}/>
    </div>
  );
}

export default App;

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
