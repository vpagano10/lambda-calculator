import React from "react";
import "../../../App.css";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='operatorButtons'>
        {props.button.char}
      </button>
    </>
  );
};

export default OperatorButton;