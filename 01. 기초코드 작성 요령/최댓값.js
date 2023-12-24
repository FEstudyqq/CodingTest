const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const numbers = input.split('\n').map(str => Number.parseInt(str, 10));

const max = Math.max(...numbers);

console.log(max);
console.log(numbers.indexOf(max) + 1);