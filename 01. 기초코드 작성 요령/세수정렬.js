const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const arr = input.map(Number);

console.log(arr.sort((a, b) => a - b).join(' '));
