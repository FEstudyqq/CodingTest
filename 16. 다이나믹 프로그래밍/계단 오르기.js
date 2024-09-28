const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const n = inputs.shift();

const dp = Array.from({ length: n + 1 }, () => Array(3).fill(0));

for (let i = 1; i <= n; i++) {
  dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = dp[i - 1][0] + inputs[i - 1];
  dp[i][2] = dp[i - 1][1] + inputs[i - 1];
}

console.log(Math.max(dp[n][1], dp[n][2]));
