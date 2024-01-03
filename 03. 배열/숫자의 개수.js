const fs = require('fs');
const [a, b, c] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const multiplied = Array.from((a * b * c).toString());
const cnt = Array.from({ length: 10 }).fill(0);

multiplied.forEach((num) => {
  cnt[num]++;
});

console.log(cnt.join('\n'));
