const fs = require('fs');
const [N, input] = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n');

const numbers = input.split(' ').map(Number);

const maxValues = [];

numbers.forEach((cur, curIdx) => {
  let max = cur;

  // 나보다 idx가 작고 숫자도 작은 원소들(3, 2, 2, 3)이 갖는 value 중 가장 큰 값을 나와 더한 값
  numbers.slice(0, curIdx).forEach((num, idx) => {
    if (num < cur) {
      max = Math.max(max, cur + maxValues[idx]);
    }
  });

  maxValues.push(max);
});

console.log(Math.max(...maxValues));
