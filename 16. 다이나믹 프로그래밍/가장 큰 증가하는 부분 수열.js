const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, inputs] = fs.readFileSync(path).toString().trim().split('\r\n');
const A = inputs.split(' ').map(Number);
const dp = inputs.split(' ').map(Number);

for (let i = 1; i < Number(n); i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j]) {
      dp[i] = Math.max(dp[i], dp[j] + A[i]);
    }
  }
}

console.log(Math.max(...dp));
