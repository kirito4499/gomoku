function board(n) {
  let p = [];
  for (let j = 0; j < n; j++) {
    p.push(Array(n).fill(null));
  }
  return p;
}

function checker(board, criteria, [current_x, current_y], step) {
  let current = board[current_x][current_y],
    count = 0,
    range = [];

  for (let c = -criteria + 1; c < criteria; c++) range.push(c);

  for (const m of range) {
    const [i, j] = step(m);

    if (board[i] !== undefined)
      if (board[i][j] !== undefined) {
        if (board[i][j] !== current) count = 0;
        else count++;
        if (count === criteria) return true;
      }
  }

  return false;
}

function won(board, criteria, [i, j]) {
  let r =
    checker(board, criteria, [i, j], (step) => [i + step, j + step]) ||
    checker(board, criteria, [i, j], (step) => [i, j - step]) ||
    checker(board, criteria, [i, j], (step) => [i + step, j - step]) ||
    checker(board, criteria, [i, j], (step) => [i + step, j]);
  return r;
}

export { board, won };
