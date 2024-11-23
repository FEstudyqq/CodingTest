const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

const n = parseInt(inputs[0]);
const A = [],
  B = [],
  C = [],
  D = [];

for (let i = 1; i <= n; i++) {
  const [a, b, c, d] = inputs[i].split(' ').map(Number);
  A.push(a);
  B.push(b);
  C.push(c);
  D.push(d);
}

const map = new Map();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const sum = A[i] + B[j];
    map.set(sum, (map.get(sum) || 0) + 1);
  }
}

let ans = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const target = -(C[i] + D[j]);
    if (map.has(target)) {
      ans += map.get(target);
    }
  }
}

console.log(ans);
