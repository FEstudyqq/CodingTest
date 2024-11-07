const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, k], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));
const dp = Array(k + 1).fill(0);

for (let i = 0; i < n; i++) {
  const [w, v] = inputs[i];

  for (let j = k + 1; j >= w; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v);
  }
}

console.log(dp[k]);
