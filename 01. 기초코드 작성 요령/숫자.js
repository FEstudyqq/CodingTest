const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const [a, b] = input.map(Number).sort((a, b) => a - b);

const abs = b - a;

const arr = Array.from({ length: abs - 1 }, (_, i) => i + a + 1);
a === b ? console.log(0) : console.log(abs - 1);
console.log(arr.join(' '));
