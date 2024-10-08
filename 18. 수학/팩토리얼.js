const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));

let ans = 1;

for (let i = 2; i <= n; i++) {
  ans *= i;
}

console.log(ans);
