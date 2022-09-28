import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="w3-justify">
      <div className="board-container">
        <div className="board">
          {props.current.board.map((x, i) => (
            <div key={i} className="board-row">
              {x.map((sx, j) => (
                <Cell
                  key={j}
                  mark={sx}
                  onClick={(event) => props.onChange(i, j)}
                  disabled={props.winner != null ? true : false}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
