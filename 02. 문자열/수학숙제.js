const fs = require('fs');

const [N, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const regex = /([0-9]+)/g;

const groups = lines.map(line => line.match(regex)).filter(line => line !== null).flat();
const numbers = [...groups.map(str => BigInt(str))];

const sorted = [...numbers];
sorted.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(sorted.join('\n'));