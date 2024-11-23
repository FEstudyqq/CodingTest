const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [_, cards, __, inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const minus = Array(10000000).fill(0);
const plus = Array(10000001).fill(0);

for (const card of cards) {
  if (card >= 0) plus[card] = 1;
  else minus[card * -1] = 1;
}

let ans = '';
for (const input of inputs) {
  if (input >= 0) ans += plus[input];
  else ans += minus[input * -1];

  ans += ' ';
}

console.log(ans.trim());
