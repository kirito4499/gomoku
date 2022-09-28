import React, { useRef } from "react";

const Status = (props) => {
  const status = useRef();

  const closeHandler = () => {
    status.current.style = "none";
  };

  return (
    <div
      ref={status}
      className="w3-modal"
      style={{ display: props.winner != null ? "block" : "none" }}
    >
      <div className="w3-modal-content w3-card-4" style={{ maxWidth: "400px" }}>
        <div className="w3-container">
          <span onClick={closeHandler} className="w3-button w3-display-topright">
            &times;
          </span>
          <h3>
            <b>{props.winner ? "O " : "X "}</b> win!
          </h3>
        </div>
        <button
          onClick={() => props.onReset(null)}
          className="w3-button w3-block w3-orange"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Status;
