const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\r\n')
  .map(Number);

const set = new Set();

for (const input of inputs) {
  const rest = input % 42;
  if (!set.has(rest)) set.add(rest);
}

console.log(set.size);
