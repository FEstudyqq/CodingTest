const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

const num = inputs.map(Number).sort((a, b) => a - b);

console.log(num.join('\n'));
