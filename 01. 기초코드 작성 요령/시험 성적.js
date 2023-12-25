const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

function solution(input) {
  if (input >= 90) return 'A';
  if (input >= 80 && input < 90) return 'B';
  if (input >= 70 && input < 80) return 'C';
  if (input >= 60 && input < 70) return 'D';
  return 'F';
}

console.log(solution(input));
