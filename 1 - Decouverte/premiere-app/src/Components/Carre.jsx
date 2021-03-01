import React from "react";
import App from '../App'

const Carre = (color, size) => {
  return (
    <div>
      <div
        style={{
          background: color,
          width: size[0],
          height: size[1],
          marginTop: "10px",
        }}
      ></div>
    </div>
  );
};

export default Carre;
