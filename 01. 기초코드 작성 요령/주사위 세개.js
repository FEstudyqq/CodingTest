const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

function solution(input) {
  const [a, b, c] = input.map(Number).sort((a, b) => a - b);
  const arrSet = new Set([a, b, c]);
  if (arrSet.size === 3) {
    return c * 100;
  }
  if (arrSet.size === 1) {
    return 10000 + a * 1000;
  }
  return 1000 + b * 100;
}
console.log(solution(input));
