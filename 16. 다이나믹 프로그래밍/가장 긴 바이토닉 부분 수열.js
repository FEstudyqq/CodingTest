const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const [n] = inputs[0];
const A = inputs[1];
const dp = Array.from({ length: n }, () => [1, 1]);
dp[0] = [1, 1];

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j]) {
      dp[i][0] = Math.max(dp[i][0], dp[j][0] + 1);
    } else if (A[i] < A[j]) {
      dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1, dp[j][1] + 1);
    }
  }
}

console.log(Math.max(...dp.flat()));
