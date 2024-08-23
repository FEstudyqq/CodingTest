const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(inputs[0]);
const size = inputs[1].split(' ').map(Number);
const [t, p] = inputs[2].split(' ').map(Number);

console.log(size.reduce((pre, cur) => Math.ceil(cur / t) + pre, 0));

console.log(Math.floor(n / p), n % p);
