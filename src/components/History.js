import React from "react";

function History(props) {
  console.log(props.history)

  return (
    <div className="w3-card-0">
      {props.history.length > 0 && (
        <div>
          <header className="w3-container w3-light-grey">
            <h4>History</h4>
          </header>
          <ul className="w3-ul">
            {props.history.map((t, i) => (
              <li key={i}>
                #{i + 1} Move <b>{i % 2 == 0 ? "O" : "X"}</b> : ({t[0] + 1}, {t[1] + 1})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default History;
