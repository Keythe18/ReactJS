// Creer un bouton qui affichera ou masquera un titre

// Creer un formulaire avec 1 input. Lorsque l'on valide le formulaire afficher son contenu dans un balise h1

// Installer react-router-dom, creer une navbar et 3 pages, afficher un titre sur chaque page

// Afficher un message dans la console lorsque l'on quitte une page grace aux cycle de vie.

import ToggleButton from "./Components/TooggleButton";
import Formulaire from "./Components/Formulaire";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <ToggleButton />
      <br/>
      <Formulaire />
      <br/>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/About" element={<About/>} />
            <Route absolute path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
