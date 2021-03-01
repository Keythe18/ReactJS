import Eleve from './Components/Eleve'
import './app.css'

function App() {

  return (

    <div>
      <Eleve nom="Lansucki" prenom="Alexis" notes={[18, 12, 8]} ville="Paris"/>
      <Eleve nom="Amzdour" prenom="Alexis" notes={[18, 6, 19]} ville="Rixheim"/>
      <Eleve nom="Cruise" prenom="Tom" notes={[18, 14, 17]} ville="Los Angeles"/>
    </div>

  );
}

export default App;
