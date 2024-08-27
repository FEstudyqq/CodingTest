const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const numbers = inputs[1].split(' ').map(Number);
const v = Number(inputs[2]);

console.log(numbers.filter((number) => number === v).length);
