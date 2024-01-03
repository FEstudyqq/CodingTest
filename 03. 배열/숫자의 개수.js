const fs = require('fs');

const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numArray = new Array(10);

for (let i = 0; i < 10; i++) {
  numArray[i] = 0;
}

const productAsString = (A * B * C).toString();

productAsString.split('').forEach(value => numArray[Number.parseInt(value, 10)]++);

console.log(numArray.join('\n'));