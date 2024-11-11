const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number))
  .flat();
const t = inputs.shift();
const w = inputs.shift();

const dp = Array.from({ length: t }, () => Array(w + 1).fill(0));

for (let i = 0; i <= w; i++) {
  if (inputs[0] === 2) {
    if (i % 2 === 1) dp[0][i] = 1;
    else dp[0][i] = 0;
  } else {
    if (i % 2 === 1) dp[0][i] = 0;
    else dp[0][i] = 1;
  }
}

for (let i = 1; i < t; i++) {
  if (inputs[i] === 1) dp[i][0] = dp[i - 1][0] + 1;
  else dp[i][0] = dp[i - 1][0];

  for (let j = 1; j <= w; j++) {
    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
    if (j % 2 === 0 && inputs[i] === 1) dp[i][j] += 1;
    else if (j % 2 !== 0 && inputs[i] === 2) dp[i][j] += 1;
  }
}
console.log(Math.max(...dp[t - 1]));
