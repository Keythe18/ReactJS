import {useState} from 'react'
import ImgCenter from "./Components/ImgCenter";
import ImgLine from "./Components/ImgLine";


function App() {
  const [imgBig, setImgBig] = useState('')

  return (
    <div>
      <ImgCenter imgBig={imgBig} setImgBig={setImgBig}/>
      <ImgLine setImgBig={setImgBig}/>
    </div>
  );
}

export default App;
