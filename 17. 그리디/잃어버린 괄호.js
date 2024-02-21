const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const equation = input.split(/(\+|\-)/g);
const nums = equation.filter(item => /\d+/.test(item)).map(str => Number.parseInt(str, 10));
const signs = equation.filter(item => !/\d+/.test(item));

const [head, ...tail] = nums;

let result = head;

let isSubstracting = false;
let subtract = 0;

let index = 0;

signs.forEach(sign => {
  if (sign === '+') {
    if (isSubstracting) {
      subtract += tail[index];
    } else {
      result += tail[index];
    }
  } else {
    if (isSubstracting) {
      result -= subtract;
      subtract = tail[index];
    } else {
      isSubstracting = true;
      subtract += tail[index];
    }
  }

  index += 1;
});

result -= subtract;

console.log(result);