const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

const n = Number(inputs[0]);
const A = [0, ...inputs[1].split(' ').map(Number)];
const dp = Array.from({ length: n + 1 }, () => [0, []]);

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && dp[j][0] + 1 > dp[i][0]) {
      dp[i][0] = dp[j][0] + 1;
      dp[i][1] = [...dp[j][1], A[i]];
    }
  }
}

let ansIdx = 0;
for (let i = 1; i <= n; i++) {
  if (dp[ansIdx][0] < dp[i][0]) ansIdx = i;
}

console.log(dp[ansIdx][0]);
console.log(...dp[ansIdx][1]);
