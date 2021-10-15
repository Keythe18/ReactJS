import { useState } from "react";
import React from "react";
import "./Img.css";

const ImgCenter = ({ imgBig }) => {
  const [count, setCount] = useState(1);

  const leftBracket = () => {
    count === 1 ? setCount(5) : setCount((count) => count - 1);
    console.log(imgBig);
    //setImgBig();
  };

  const rightBracket = () => {
    count === 5 ? setCount(1) : setCount((count) => count + 1);
    console.log(imgBig);
   // setImgBig();
  };

  return (
    <div className="center">
      <button onClick={leftBracket} className="btnLeft">
        &lt;
      </button>
      <img className="imgCenter" alt="" src={imgBig} />
      <button onClick={rightBracket} className="btnRight">
        &gt;
      </button>
    </div>
  );
};

export default ImgCenter;
