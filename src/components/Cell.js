import React from "react";

const Cell = (props) => {
  return (
    <button className="btn btn-board" onClick={props.onClick} disabled={props.disabled}>
      <span className={props.mark === false? "x" : props.mark === true? "o" : ""}></span>
    </button>
  )
} 

export default Cell;