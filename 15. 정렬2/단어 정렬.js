const fs = require('fs');
const [N, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const sorted = Array.from(new Set(input))
  .sort((a, b) => {
    if (a.length === b.length) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
    return a.length - b.length;
  })
  .join('\n');

console.log(sorted);
