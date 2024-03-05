const fs = require('fs');
const n = Number(fs.readFileSync('../input.txt').toString().trim());

const memo = Array.from({ length: n + 1 });

for (let i = 1; i <= n; i++) {
  if (i === 1) memo[i] = 1;
  else if (i === 2) memo[i] = 3;
  else memo[i] = (memo[i - 1] + 2 * memo[i - 2]) % 10007;
}

console.log(memo[n]);
