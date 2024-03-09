const fs = require('fs');
const [N, ...paper] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

function isAllTheSame(r, c, len) {
  const firstNumber = paper[r][c];

  for (let i = r; i < r + len; i++) {
    for (let j = c; j < c + len; j++) {
      if (paper[i][j] !== firstNumber) return false;
    }
  }

  return true;
}

function cut(r, c, len) {
  if (isAllTheSame(r, c, len)) {
    paper[r][c] === 0 ? white++ : blue++;
    return;
  }

  let n = len / 2;
  cut(r, c, n);
  cut(r, c + n, n);
  cut(r + n, c, n);
  cut(r + n, c + n, n);
}

let white = 0;
let blue = 0;
cut(0, 0, N);
console.log(white + '\n' + blue);
