const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();
const lines = input.split('\n');
const values = lines.slice(1, lines.length - 1).map(line => line.split(' ').map(str => Number.parseInt(str, 10)));

const result = [];

values.forEach(([A, B]) => result.push(A + B));
console.log(result.join('\n'));