const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(inputs[0]);

let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (i % 125 === 0) cnt += 1;
  if (i % 25 === 0) cnt += 1;
  if (i % 5 === 0) cnt += 1;
}

console.log(cnt);
