const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n').map(Number);
inputs.shift();

const dp = Array(12).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 12; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (const input of inputs) {
  console.log(dp[input]);
}
