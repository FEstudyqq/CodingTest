/**
 * @param {number} row 
 * @param {number[]} queens 
 */
function available(row, queens) {
  for (let i = 0; i < row; i++) {
    if (queens[i] === queens[row]) {
      return false;
    }

    // 퀸을 실제로 놓은 곳과의 x/y좌표 간
    // 차이가 같으면 대각선 상에 존재
    const xOffset = row > i ? row - i : i - row;
    const yOffset = queens[row] > queens[i] ? queens[row] - queens[i] : queens[i] - queens[row];

    if (xOffset === yOffset) {
      return false;
    }
  }

  return true;
}

/**
 * @param {number} row 
 * @param {number} N 
 * @param {number[]} queens 
 * @param {boolean[]} results 
 */
function backtrack(row, N, queens, results) {
  if (row === N) {
    results.push(true);
    return;
  }

  for (let i = 0; i < N; i++) {
    queens[row] = i;

    if (available(row, queens)) {
      backtrack(row + 1, N, queens, results);
    }
  }
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number.parseInt(input, 10);

/**
 * @type {number[]}
 */
const queens = [];
/**
 * @type {boolean[]}
 */
const results = [];

for (let i = 0; i < N; i++) {
  queens.push(-1);
}

backtrack(0, N, queens, results);

console.log(results.length);