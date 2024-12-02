const fs = require('fs');
const inputs = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));
const [M, N] = inputs[0];
const sticks = inputs[1].sort((a, b) => a - b);

let l = 0;
let r = sticks[N - 1] + 1;
let m = Math.floor((l + r) / 2);

while (l < m && m < r) {
  if (isSticksNotEnough(m)) r = m;
  else l = m;
  m = Math.floor((l + r) / 2);
}

console.log(m);

function isSticksNotEnough(len) {
  const sum = sticks.reduce((sum, stick) => sum + Math.floor(stick / len), 0);
  return sum < M;
}
