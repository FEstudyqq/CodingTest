const fs = require('fs');
const [[N], numbers] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

let left = 0;
let right = N - 1;
let mixed;
let answer = '';

while (mixed !== 0 && left < right) {
  const curMixed = numbers[left] + numbers[right];

  if (!mixed || Math.abs(mixed) > Math.abs(curMixed)) {
    mixed = curMixed;
    answer = `${numbers[left]} ${numbers[right]}`;
  }

  if (curMixed < 0) left += 1;
  else right -= 1;
}

console.log(answer);
