const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b);

const students = Array.from({ length: 30 }).fill(true);

for (const input of inputs) {
  students[input - 1] = false;
}

for (let i = 0; i < 30; i++) {
  if (students[i]) console.log(i + 1);
}