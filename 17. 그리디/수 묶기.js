const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n').map(Number);

inputs.shift();
const plus = inputs.filter((it) => it > 0).sort((a, b) => a - b);
const minus = inputs
  .filter((it) => it <= 0)
  .map((it) => it * -1)
  .sort((a, b) => a - b);

let ans = 0;
while (plus.length) {
  const a = plus.pop();
  const b = plus.pop();

  if (!b) ans += a;
  else if (a * b < a + b) ans += a + b;
  else ans += a * b;
}

while (minus.length) {
  const a = minus.pop();
  const b = minus.pop();

  if (b === undefined) ans -= a;
  else if (b !== 0) ans += a * b;
}

console.log(ans);
