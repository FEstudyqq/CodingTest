const fs = require('fs');
const [N, r, c] = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let visitNumber = 0;
findArea(1, r, c);

function findArea(depth, r, c) {
  if (depth > N) {
    console.log(visitNumber);
    return;
  }

  const half = 2 ** (N - depth);

  if (r < half && c < half) {
    visitNumber += 0;
    findArea(depth + 1, r, c);
  } else if (r < half && half <= c) {
    visitNumber += half ** 2 * 1;
    findArea(depth + 1, r, c - half);
  } else if (half <= r && c < half) {
    visitNumber += half ** 2 * 2;
    findArea(depth + 1, r - half, c);
  } else if (half <= r && half <= c) {
    visitNumber += half ** 2 * 3;
    findArea(depth + 1, r - half, c - half);
  }
}
