const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));
const dp = Array.from({ length: n }, () => Array(10).fill(0n));
const MOD = 1000000000n;

for (let i = 1; i <= 9; i++) {
  dp[0][i] = 1n;
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j > 0) dp[i][j] += dp[i - 1][j - 1];
    if (j < 9) dp[i][j] += dp[i - 1][j + 1];
    dp[i][j] %= MOD;
  }
}

const answer = dp[n - 1].reduce((pre, cur) => BigInt(pre) + BigInt(cur), 0n);

console.log((answer % 1000000000n).toString());
