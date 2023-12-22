const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();

const nums = input.split(' ').map(str => Number.parseInt(str, 10));

const source = [...nums];

source.sort((a, b) => a - b);

console.log(source.join(' '));