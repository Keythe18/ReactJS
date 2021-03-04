import React from "react";

const Form = ({ inputValue, setInputValue, setDisplay }) => {

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
        <input type="text" onChange={handleChange}/>
        <button>Clic</button>
      </form>
    </div>
  );
};

export default Form;
