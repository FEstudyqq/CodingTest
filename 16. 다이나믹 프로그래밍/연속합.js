const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, inputs] = fs.readFileSync(path).toString().trim().split('\n');
const numbers = inputs.split(' ').map(Number);
const dp = new Array(Number(n)).fill(0);
dp[0] = numbers[0];

for (let i = 1; i < Number(n); i++) {
  dp[i] = Math.max(dp[i - 1] + numbers[i], numbers[i]);
}

console.log(Math.max(...dp));
