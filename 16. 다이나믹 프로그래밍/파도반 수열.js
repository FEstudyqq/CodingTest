const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [_, ...P] = fs.readFileSync(path).toString().trim().split('\n');
const dp = new Array(101).fill(1);
dp[4] = 2;
dp[5] = 2;

for (let i = 6; i <= 100; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
}

for (const n of P) {
  console.log(dp[Number(n)]);
}
