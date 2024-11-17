const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const n = Math.max(...inputs);
const dp = Array(n + 1).fill(1n);

dp[1] = 1n;
dp[2] = 3n;

for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] * 2n;
}

for (const input of inputs) {
  console.log(dp[input].toString());
}
