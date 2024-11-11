const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = inputs.splice(0, 1)[0].split(' ').map(Number);
const S = new Set(inputs.splice(0, n));

let ans = 0;

for (const input of inputs) {
  if (S.has(input)) ans += 1;
}

console.log(ans);
