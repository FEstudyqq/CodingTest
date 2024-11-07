const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = Number(fs.readFileSync(path));
const dp = Array(91).fill(0n);
dp[1] = 1n;

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[n].toString());
