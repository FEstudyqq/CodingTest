const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');
const words = Array.from(new Set(inputs));

words.sort((a, b) => {
  if (a.length === b.length) return a > b ? 1 : -1;
  else return a.length - b.length;
});

const answer = words.reduce((pre, cur) => pre + '\n' + cur);
console.log(answer);
