const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split(' ');

console.log(inputs[0] === '' ? 0 : inputs.length);
