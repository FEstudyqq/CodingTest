const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\r\n');
const scores = inputs[1].split(' ').map(Number);
const n = Number(inputs[0]);
const m = Math.max(...scores);
let sum = 0;

for (const score of scores) {
  sum += (score / m) * 100;
}

console.log(sum / n);
