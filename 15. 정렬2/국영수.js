const fs = require('fs');
const [N, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const answer = input
  .map((std) => std.split(' '))
  .sort((a, b) => {
    if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3]) {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    }
    if (a[1] === b[1] && a[2] === b[2]) return b[3] - a[3];
    if (a[1] === b[1]) return a[2] - b[2];
    return b[1] - a[1];
  })
  .map((std) => std[0]);

console.log(answer.join('\n'));
