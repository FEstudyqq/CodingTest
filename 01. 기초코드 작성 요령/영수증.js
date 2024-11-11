const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [x, n, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

let sum = 0;
for (const input of inputs) {
  const [a, b] = input.split(' ').map(Number);
  sum += a * b;
}

console.log(sum === Number(x) ? 'Yes' : 'No');
