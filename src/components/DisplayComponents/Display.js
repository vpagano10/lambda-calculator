import React, {useState} from "react";
import "../../App.css";

const Display = (props) => {
  return (
    <div className="display">
      {props.calcDisplay}
    </div>
  )
};

export default Display;