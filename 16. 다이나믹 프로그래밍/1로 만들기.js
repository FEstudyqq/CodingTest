const fs = require('fs');
const x = Number(fs.readFileSync('/dev/stdin').toString().trim());

const memo = Array.from({ length: x + 1 });
memo[1] = 0;
memo[2] = 1;
memo[3] = 1;

for (let i = 4; i <= x; i++) {
  let min = 1 + memo[i - 1];
  if (i % 3 === 0 && min > memo[i / 3]) min = 1 + memo[i / 3];
  if (i % 2 === 0 && min > memo[i / 2]) min = 1 + memo[i / 2];
  memo[i] = min;
}

console.log(memo[x]);
