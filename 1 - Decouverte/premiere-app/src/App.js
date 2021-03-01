import { useState } from "react";

import "./app.css";

function App() {
  const [dimensions, setDimensions] = useState([
    {
      width: 50,
      height: 50,
    },
    {
      width: 50,
      height: 50,
    },
  ]);

  const handleClick = () => {
    let randomNumber1 = Math.floor(Math.random() * 150) + 50;
    let randomNumber2 = Math.floor(Math.random() * 150) + 50;
    let randomNumber3 = Math.floor(Math.random() * 150) + 50;
    let randomNumber4 = Math.floor(Math.random() * 150) + 50;
    setDimensions([
      {
        width: randomNumber1,
        height: randomNumber2,
      },
      {
        width: randomNumber3,
        height: randomNumber4,
      },
    ]);
  };
  return (
    <>
      <button onClick={handleClick}>Mon Bouton</button>

      {dimensions.map((dimension, index) => (
        <div
          key={index}
          style={{
            height: dimension.height + "px",
            width: dimension.width + "px",
            background: "orange",
            marginTop: 40 + "px",
          }}
        ></div>
      ))}
    </>
  );
}

export default App;