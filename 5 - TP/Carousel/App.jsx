import {useState} from 'react'

import Slides from './Components/Slides'
import Thumbnail from './Components/Thumbnail'

import './app.scss'

function App() {
  const [position, setPosition] = useState(0)

  const [listIMG, setListIMG] = useState([
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1280px-Unofficial_JavaScript_logo_2.svg.png',
    'https://code.visualstudio.com/assets/docs/languages/javascript/overview.png',
    'https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg',
    'https://miro.medium.com/max/1050/1*1gByVzAtW0myl9e9CsGqhw.jpeg',
    'https://miro.medium.com/max/1050/0*ok51b2bP1XoBNDbs',
  ])


  return (
    <div className="App">


      <Slides listIMG={listIMG} position={position} setPosition={setPosition} />
      <Thumbnail listIMG={listIMG} position={position} />


    </div>
  );
}

export default App;
