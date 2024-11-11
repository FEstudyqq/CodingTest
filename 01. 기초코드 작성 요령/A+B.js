let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const answer = input
  .map((it) => parseInt(it))
  .reduce((pre, cur) => pre + cur, 0);

console.log(answer);
