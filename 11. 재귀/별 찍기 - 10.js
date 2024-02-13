/**
 * @param {number} N 
 * @param {number} x 
 * @param {number} y 
 * @param {string[]} result 
 */
function star(N, x, y, result) {
  if (N === 1) {
    if (x % 3 === 1 && y % 3 === 1) {
      result.push(' ');
    } else {
      result.push('*');
    }
  } else if ((Math.floor(x / N)) % 3 === 1 && (Math.floor(y / N)) % 3 === 1) {
    result.push(' ');
  } else {
    star(N / 3, x, y, result);
  }
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number.parseInt(input, 10);

const result = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    star(N, i, j, result);
  }
}

const printable = [];

for (let i = 0; i < N * N; i += N) {
  printable.push(result.slice(i, i + N).join(''));
}

console.log(printable.join('\n'));