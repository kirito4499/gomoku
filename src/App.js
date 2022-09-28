import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import Control, { OPTIONS } from "./components/Control";
import { board, won } from "./util";
import Status from "./components/Status";
import History from "./components/History";

function App() {
  const [options, setOptions] = useState(OPTIONS);
  const [current, setCurrent] = useState({
    board: board(options.size),
    turn: false,
    criteria: options.criteria,
  });
  const [history, setHistory] = useState([]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    let newBoard = board(options.size),
      newCriteria = options.criteria;
    let newCurrent = {
      board: newBoard,
      turn: false,
      criteria: newCriteria,
    };
    setCurrent(newCurrent);
    setHistory([]);
    setWinner(null);
  }, [options]);

  const handleReset = (newOptions) => {
    if (newOptions != null) setOptions({ ...newOptions });
    else setOptions({ ...options });
  };

  const handleUndo = () => {
    setCurrent(history.length > 1 ? history.pop() : []);
    setHistory(history);
    setWinner(null);
  };

  const handleBoardOnchange = (i, j) => {
    const prev = JSON.parse(JSON.stringify(current));
    if (current.board[i][j] != null) return;
    current.board[i][j] = current.turn;

    if (won(current.board, current.criteria, [i, j])) {
      setWinner(current.turn);
    }

    setCurrent({
      board: current.board,
      turn: !current.turn,
      criteria: current.criteria,
    });
    setHistory([...history, [i, j]]);
  };

  return (
    <div className="App">
      <div className="w3-row-padding w3-content" style={{ maxWidth: "1024px" }}>
        <div className="w3-row-padding">
          <h2>Gomoku</h2>
        </div>
        <div className="w3-twothird">
          <Board
            current={current}
            onChange={handleBoardOnchange}
            winner={winner}
          />
        </div>
        <div className="w3-third">
          <Control
            turn={current.turn}
            onReset={handleReset}
            onUndo={handleUndo}
          />
          <hr />
          <History history={history} />
        </div>
      </div>

      <Status onReset={handleReset} winner={winner} />
    </div>
  );
}

export default App;
