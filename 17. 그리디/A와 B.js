const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [s, t] = fs
  .readFileSync(path, 'utf-8')
  .trim()
  .split('\n')
  .map((it) => it.split(''));

while (s.length < t.length) {
  if (t.pop() === 'A') continue;

  t.reverse();
}

console.log(Number(s.join('') === t.join('')));