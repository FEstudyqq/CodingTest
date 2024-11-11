const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const n = Number(inputs.shift());

const dp = Array.from({ length: n }, () => Array(3).fill(0));
const R = [];
const G = [];
const B = [];

for (const input of inputs) {
  const [r, g, b] = input;
  R.push(r);
  G.push(g);
  B.push(b);
}

dp[0] = [R[0], G[0], B[0]];

for (let i = 1; i < n; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + R[i];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + G[i];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + B[i];
}

console.log(Math.min(...dp[n - 1]));
