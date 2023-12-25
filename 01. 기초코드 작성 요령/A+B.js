const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const [A, B] = input.map(Number);

console.log(A + B);
