const fs = require('fs');

let input = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('Wiki\\input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((it) => parseInt(it));

const { size } = new Set(input);

if (size === 3) console.log(Math.max(...input) * 100);
else if (size === 2) {
  const i = input.pop();
  const j = input.pop();
  if (i === input[0]) console.log(i * 100 + 1000);
  else if (j === input[0]) console.log(j * 100 + 1000);
  else console.log(i * 100 + 1000);
} else console.log(input[0] * 1000 + 10000);
