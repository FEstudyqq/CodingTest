const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();
const numbers = input.split(' ').map(str => Number.parseInt(str, 10));
const sorted = [...numbers];
sorted.sort((a, b) => a - b);

const [first, second] = sorted;

if (first === second) {
  console.log(0);
} else {
  console.log(second - first - 1); 
}

for (let i = first + 1; i < second; i++) {
  process.stdout.write(`${i} `);
}