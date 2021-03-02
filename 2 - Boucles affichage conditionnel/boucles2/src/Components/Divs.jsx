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
        <button onClick={clickFunc}>Poof</button>
      </div>
    </>
  );
};

export default Divs;
