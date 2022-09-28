import React, { useState } from "react";

const OPTIONS = {
  size: 20,
  criteria: 5,
};

const Control = (props) => {
  const [options, setOptions] = useState(OPTIONS);

  const changeCriteriaHandler = (event) => {
    const newCriteria = parseInt(event.target.value);
    setOptions((prevState) => {
      return { ...prevState, criteria: newCriteria };
    });
  };

  const changeSizeHandler = (event) => {
    const newSize = parseInt(event.target.value);
    setOptions((prevState) => {
      return { ...prevState, size: newSize };
    });
  };

  const resetHandler = () => {
    props.onReset(options);
  };

  const undoHandler = () => {
    props.onUndo();
  };

  return (
    <div className="w3-card-0" style={{ paddingTop: "3px" }}>
      <header className="w3-container w3-light-grey">
        <h3>
          Turn <b>{props.turn ? "O" : "X"}</b>
        </h3>
      </header>

      <div className="w3-row-padding w3-section">
        <div className="w3-half">
          <label>Board Size</label>
          <input
            className="w3-input w3-border"
            type="number"
            value={options.size}
            onChange={changeSizeHandler}
          />
        </div>
        <div className="w3-half">
          <label>Win Condition</label>
          <input
            className="w3-input w3-border"
            type="number"
            value={options.criteria}
            onChange={changeCriteriaHandler}
          />
        </div>
      </div>

      <hr />

      <button
        className="w3-button w3-block w3-dark-grey"
        onClick={resetHandler}
      >
        Reset
      </button>
      <br />
      <button className="w3-button w3-block w3-dark-grey" onClick={undoHandler}>
        Undo
      </button>
    </div>
  );
};

export default Control;
export { OPTIONS };
