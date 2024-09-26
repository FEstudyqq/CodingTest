const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString();

console.log(inputs);
