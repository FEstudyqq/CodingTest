const fs = require('fs');
const [N, ...words] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const goodWordCnt = words.reduce((cnt, word) => {
  const stack = [];
  Array.from(word).forEach((char) => {
    if (stack.length !== 0 && stack[stack.length - 1] === char) stack.pop();
    else stack.push(char);
  });
  if (stack.length === 0) cnt++;
  return cnt;
}, 0);

console.log(goodWordCnt);
