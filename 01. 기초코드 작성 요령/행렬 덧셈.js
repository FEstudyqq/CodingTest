const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = inputs[0].split(' ').map(Number);

const A = inputs.slice(1, n + 1).map((it) => it.split(' ').map(Number));
const B = inputs.slice(n + 1).map((it) => it.split(' ').map(Number));

for (let i = 0; i < n; i++) {
  const sum = [];
  for (let j = 0; j < m; j++) {
    sum.push(A[i][j] + B[i][j]);
  }
  console.log(...sum);
}
