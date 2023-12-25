const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const result = +input;

function solution(result) {
  return result % 4 === 0 && (result % 100 !== 0 || result % 400 === 0);
}

console.log(+solution(result));
