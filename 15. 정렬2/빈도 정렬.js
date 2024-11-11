const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [heads, tails] = fs.readFileSync(path).toString().trim().split('\n');
const seq = tails.split(' ');
const checkObj = {};

for (const s of seq) {
  if (s in checkObj) checkObj[s]++;
  else checkObj[s] = 1;
}

seq.sort((a, b) => {
  if (checkObj[a] !== checkObj[b]) return checkObj[b] - checkObj[a];
  return seq.indexOf(a) > seq.indexOf(b) ? 1 : -1;
});

console.log(...seq);
