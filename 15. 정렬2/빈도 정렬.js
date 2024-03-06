const fs = require('fs');
const numbers = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')[1]
  .split(' ');

const memo = {};

numbers.forEach((num, i) => {
  if (!memo[num]) memo[num] = { minIndex: i, cnt: 1 };
  else memo[num].cnt += 1;
});

const answer = numbers
  .sort((a, b) => {
    if (memo[a].cnt === memo[b].cnt) return memo[a].minIndex - memo[b].minIndex;
    return memo[b].cnt - memo[a].cnt;
  })
  .join(' ');

console.log(answer);
