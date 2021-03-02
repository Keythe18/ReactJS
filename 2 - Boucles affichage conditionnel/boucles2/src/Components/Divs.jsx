import React, { useState } from "react";

const Divs = ({clickFunc}) => {

  return (
    <>
      <div
        style={{
          background: "lightblue",
          width: 100 + "px",
          height: 100 + "px",
          margin: "10px",
        }}
      >
        1
        <button onClick={clickFunc}>Hide</button>
      </div>
    </>
  );
};

export default Divs;
