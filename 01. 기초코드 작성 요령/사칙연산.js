const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();
const [ A, B ] = input.split(' ').map(str => Number.parseInt(str, 10));

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B)