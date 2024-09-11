const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path, 'utf-8').toString().trim().split('\n');

const [n, m] = inputs[0].split(' ').map(Number);
const books = inputs[1].split(' ').map(Number);

const left = books
  .filter((it) => it < 0)
  .map((it) => -1 * it)
  .sort((a, b) => b - a);
const right = books.filter((it) => it > 0).sort((a, b) => b - a);

let ans = 0;

for (let i = 0; i < left.length; i += m) {
  ans += left[i] * 2;
}

for (let i = 0; i < right.length; i += m) {
  ans += right[i] * 2;
}

if (left.length === 0) ans -= right[0];
else if (right.length === 0) ans -= left[0];
else if (left.length && right.length) {
  if (left[0] > right[0]) ans -= left[0];
  else ans -= right[0];
}
console.log(ans);
