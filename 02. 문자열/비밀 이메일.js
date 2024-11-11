const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const message = fs.readFileSync(path).toString().trim();
const n = message.length;

function getRC(n) {
  const max = Math.floor(Math.sqrt(n));
  for (let i = max; i > 0; i--) {
    if (n % i === 0) return [i, n / i].sort((a, b) => a - b);
  }
}

const [R, C] = getRC(n);

const original = Array.from({ length: C }, (_, rowIdx) =>
  Array.from({ length: R }, (_, colIdx) => message[rowIdx * R + colIdx])
);

let result = '';

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    result += original[j][i];
  }
}

console.log(result);
