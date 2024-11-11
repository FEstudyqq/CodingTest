const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...works] = fs.readFileSync(path).toString().trim().split('\n');
const N = Number(n);
const T = [];
const P = [];
const dp = Array(N + 1).fill(0);

for (const work of works) {
  const [t, p] = work.split(' ').map(Number);
  T.push(t);
  P.push(p);
}

for (let i = N - 1; i >= 0; i--) {
  if (i + T[i] <= N) {
    dp[i] = Math.max(dp[i + 1], dp[i + T[i]] + P[i]);
  } else {
    dp[i] = Math.max(dp[i + 1]);
  }
}

console.log(Math.max(...dp));
