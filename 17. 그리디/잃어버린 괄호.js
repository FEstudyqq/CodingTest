const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [positive, ...negatives] = input
  .split('-')
  .map((str) => str.split('+').reduce((sum, num) => sum + Number(num), 0));
const answer = negatives.reduce((result, num) => result - num, positive);
console.log(answer);
