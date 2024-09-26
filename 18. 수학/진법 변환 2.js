const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, b] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

console.log(n.toString(b).toUpperCase());
