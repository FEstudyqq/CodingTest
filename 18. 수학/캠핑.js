const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

for (let i = 0; i < inputs.length - 1; i++) {
  const [l, p, v] = inputs[i].split(' ').map(Number);
  let ans = Math.floor(v / p) * l + (v % p > l ? l : v % p);

  console.log(`Case ${i + 1}: ${ans}`);
}
