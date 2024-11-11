const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...inputs] = fs.readFileSync(path).toString().trim().split('\r\n');
const [n, m] = nm.split(' ').map(Number);
const basket = Array.from({ length: n }).map((_, idx) => idx);

for (let i = 0; i < m; i++) {
  const [a, b] = inputs[i].split(' ').map(Number);
  const temp = basket[b - 1];
  basket[b - 1] = basket[a - 1];
  basket[a - 1] = temp;
}

console.log(...basket.map((it) => it + 1));
