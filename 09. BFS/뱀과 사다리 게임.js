const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

inputs.shift();
const map = Array(101).fill(0);
const q = [1];
const l = new Map();

for (const input of inputs) {
  const [x, y] = input;
  l.set(x, y);
}

while (q.length) {
  const x = q.shift();

  if (x === 100) {
    console.log(map[x]);
    break;
  }

  if (l.has(x)) {
    const nx = l.get(x);

    if (map[nx] === 0) {
      map[nx] = map[x];
    } else {
      map[nx] = Math.min(map[x], map[nx]);
    }
    q.push(nx);
    continue;
  }

  for (let i = 1; i <= 6; i++) {
    const nx = x + i;

    if (map[nx] === 0 || map[nx] > map[x] + 1) {
      map[nx] = map[x] + 1;
      q.push(nx);
    }
  }
}
