const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const [a, b] = input.map(Number).sort((a, b) => a - b);
const abs = Math.abs(b - a);
console.log(a, b);
const arr = Array.from({ length: abs + 1 }, (_, i) => i + a + 1);
console.log(abs - 1);
console.log(arr.join(' '));
