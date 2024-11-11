const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const A = inputs[1].split(' ').map(Number);
const num = inputs[3].split(' ').map(Number);
const map = new Map();

for (let i = 0; i < A.length; i++) {
  const target = A[i];
  map.set(target, true);
}

for (let i = 0; i < num.length; i++) {
  const target = num[i];
  console.log(map.get(target) ? 1 : 0);
}
