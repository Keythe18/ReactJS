import React from "react";

const DivsAlt = ({color, sizer}) => {
  return (
    <div>
      <div
        style={{
          background: color,
          width: sizer + 'px',
          height: sizer + 'px',
          margin: "10px",
        }}
      >
        2
      </div>
    </div>
  );
};

export default DivsAlt;
