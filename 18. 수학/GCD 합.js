const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [_, ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const GCD = (a, b) => (b === 0 ? a : GCD(b, a % b));

for (const [n, ...input] of inputs) {
  let ans = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      ans += GCD(input[i], input[j]);
    }
  }

  console.log(ans);
}
