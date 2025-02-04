const [n, k] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let numbers = Array.from({ length: n - 1 }).map((_, i) => i + 2);
const removed = [];

while (removed.length < k) {
  numbers = numbers.reduce((arr, num) => {
    if (num % numbers[0] === 0) removed.push(num);
    else arr.push(num);

    return arr;
  }, []);
}

console.log(removed[k - 1]);
