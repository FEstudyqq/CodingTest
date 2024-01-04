const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [, arr, x] = input;

const sequence = arr.split(' ').map(Number);
const sub = sequence.filter(v => x - v !== v).map(r => x - r);
const filterArr = new Set(sub);
const filter = sequence.filter(v => filterArr.has(v));

console.log(filter.length / 2);
