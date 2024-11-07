const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], M, C] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const sumC = C.reduce((pre, cur) => pre + cur);
const dp = Array(sumC + 1).fill(0);

for (let a = 0; a < n; a++) {
  const memory = M[a];
  const cost = C[a];

  for (let i = sumC; i >= cost; i--) {
    dp[i] = Math.max(dp[i], dp[i - cost] + memory);
  }
}

console.log(dp.findIndex((it) => it >= m));
