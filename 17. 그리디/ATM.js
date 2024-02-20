const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const times = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => Number(a) - Number(b));

let answer = 0;
times.reduce((sum, time) => {
  sum += time;
  answer += sum;
  return sum;
}, 0);

console.log(answer);
