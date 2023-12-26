const input = require('fs').readFileSync('/dev/stdin').toString().split('\r\n');

const sortInput = [...input].sort((a, b) => a - b);

const aver = sortInput.reduce((acc, cur) => acc + +cur, 0);

console.log(parseInt(aver / 5));
console.log(+sortInput[2]);
