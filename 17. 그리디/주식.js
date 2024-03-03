const fs = require('fs');
const [T, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let pointer = 1;
for (let t = 0; t < T; t++) {
  const numbers = lines[pointer].split(' ').map(Number);
  pointer += 2;

  let sum = 0;
  const stack = []; // max 값 index만 담는 스택
  numbers.forEach((number, index) => {
    while (numbers[stack[stack.length - 1]] < number) {
      const maxIndex = stack.pop();
      const prevIndex = stack[stack.length - 1] ?? -1;
      sum += (number - numbers[maxIndex]) * (maxIndex - prevIndex);
    }
    if (stack.length === 0 || numbers[stack[stack.length - 1]] >= number)
      stack.push(index);
  });

  console.log(sum);
}
