const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' '))
  .flat()
  .filter((it) => it)
  .slice(1)
  .map((it) =>
    Array(...it)
      .reverse()
      .join('')
  )
  .map(Number)
  .sort((a, b) => a - b)
  .join('\n');

console.log(inputs);
