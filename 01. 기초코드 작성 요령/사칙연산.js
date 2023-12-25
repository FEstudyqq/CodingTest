const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const [A, B] = input.map(Number);

console.log(parseInt(A + B));
console.log(parseInt(A - B));
console.log(parseInt(A * B));
console.log(parseInt(A / B));
console.log(parseInt(A % B));
