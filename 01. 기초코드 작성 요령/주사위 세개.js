const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();

const nums = input.split(' ').map(str => Number.parseInt(str, 10));
const source = [...nums];
source.sort((a, b) => a - b);

let result = 0;

if (source.every(num => num === source[0])) {
  result = 10_000 + source[0] * 1_000;
} else {
  if (source[0] === source[1]) {
    result = 1_000 + source[0] * 100;
  } else if (source[1] === source[2]) {
    result = 1_000 + source[1] * 100;
  } else {
    result = source[2] * 100;
  }
}

console.log(result);