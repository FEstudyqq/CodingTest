const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map((it) => Number(it));
let n = inputs[0];
const k = inputs[1];
const map = new Array(100001).fill(0);

const q = [n];

while (q.length) {
  const target = q.shift();
  if (target === k) {
    console.log(map[target]);
    break;
  }

  for (const newTarget of [target - 1, target + 1, target * 2]) {
    if (newTarget >= 0 && newTarget <= 100000 && map[newTarget] === 0) {
      map[newTarget] = map[target] + 1;
      q.push(newTarget);
    }
  }
}
