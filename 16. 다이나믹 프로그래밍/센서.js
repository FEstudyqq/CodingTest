const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, k, ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number))
  .flat();

const sensors = inputs.sort((a, b) => a - b);

let diff = [];
for (let i = 1; i < n; i++) {
  diff.push(sensors[i] - sensors[i - 1]);
}

diff = diff.sort((a, b) => a - b).filter((it) => it !== 0);

for (let i = 0; i < k - 1; i++) {
  if (diff.length > 0) diff.pop();
}

if (diff.length === 0) console.log(0);
else console.log(diff.reduce((pre, cur) => pre + cur));
