const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));

let sum = 0;

for (let i = 1; i <= n; i++) sum += i;

console.log(sum);
