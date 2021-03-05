import React, { useEffect, useRef } from "react";

const DisplayForm = ({ display }) => {
  useEffect(() => {
    maDiv.current.style.background = "lightblue";
    maDiv.current.style.width = "105px";
    maDiv.current.style.height = "19px";
    maDiv.current.style.border = "2px solid grey";
    maDiv.current.style.padding = '5px'
  });

  const maDiv = useRef();
  return <div ref={maDiv}>{display} Fahrenheit</div>;
};

export default DisplayForm;
