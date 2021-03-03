import React from "react";

let result = '';

const Clavier = ({nbr, setNbr}) => {

    const handleClick = (Chiffre) => {
        setNbr((nbr) => (nbr + Chiffre))
    };

    const addFunction = () => {
        result = nbr
        console.log(result)
        setNbr('')
    };

    const displayResult = () => {
        setNbr((nbr) => (nbr + result))
        console.log(nbr + result)
    };
  return (
    <div>
      <button onClick={() => {handleClick('7')}}>7</button>
      <button onClick={() => {handleClick('8')}}>8</button>
      <button onClick={() => {handleClick('9')}}>9</button>
      <br />
      <button onClick={() => {handleClick('4')}}>4</button>
      <button onClick={() => {handleClick('5')}}>5</button>
      <button onClick={() => {handleClick('6')}}>6</button>
      <br />
      <button onClick={() => {handleClick('1')}}>1</button>
      <button onClick={() => {handleClick('2')}}>2</button>
      <button onClick={() => {handleClick('3')}}>3</button>
      <br />
      <button onClick={addFunction}>+</button>
      <button onClick={() => {handleClick('0')}}>0</button>
      <button onClick={displayResult}>=</button>
    </div>
  );
};

export default Clavier;
