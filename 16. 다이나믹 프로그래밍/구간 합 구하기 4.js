const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n, m] = inputs.shift();
const numbers = inputs.shift();
const dp = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  dp[i] = dp[i - 1] + numbers[i - 1];
}

for (const input of inputs) {
  const [start, end] = input;
  console.log(dp[end] - dp[start - 1]);
}
