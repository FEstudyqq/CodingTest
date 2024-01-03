const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const inputNum = input.reduce((acc, cur) => acc * +cur, 1);
const arrNum = [...(inputNum + '')];

const obj = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

const count = arrNum.reduce((a, c) => {
  a[c] = (a[c] || 0) + 1;
  return a;
}, obj);

console.log(Object.values(count).join('\n'));
