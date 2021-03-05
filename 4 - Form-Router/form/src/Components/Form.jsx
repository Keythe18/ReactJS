import React, {useRef, useEffect} from "react";

const Form = ({ inputValue, setInputValue, setDisplay }) => {

    useEffect(() => {
    maForm.current.style.background = 'green'
    maForm.current.style.width = "100px";
    maForm.current.style.height = "30px";
  });

  const maForm = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplay(inputValue * 1.8 + 32)
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={maForm} type="text" onChange={handleChange}/>
        <button>cOwOnvert</button>
      </form>
    </div>
  );
};

export default Form;
