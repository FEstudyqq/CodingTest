const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const basket = Array.from({ length: n }).fill(0);

for (const input of inputs) {
  const [i, j, k] = input.split(' ').map(Number);

  for (let a = i; a <= j; a++) {
    basket[a - 1] = k;
  }
}
console.log(...basket);
