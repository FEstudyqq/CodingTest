const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [_, A, B] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const set = new Set();

for (const a of A) {
  set.add(a);
}

for (const b of B) {
  if (set.has(b)) set.delete(b);
}

console.log(set.size);
console.log(...Array.from(set).sort((a, b) => a - b));
