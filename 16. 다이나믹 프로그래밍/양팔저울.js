const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [_, weights, __, beads] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const maxWeight = 40000;
const dp = Array(maxWeight + 1).fill(false);
dp[0] = true;

for (const weight of weights) {
  const ans = [];

  for (let i = 0; i <= maxWeight; i++) {
    if (dp[i]) ans.push(i + weight, Math.abs(i - weight));
  }

  ans.forEach((it) => (dp[it] = true));
}

let ans = '';

for (const bead of beads) {
  ans += dp[bead] ? 'Y ' : 'N ';
}

console.log(ans.trim());
