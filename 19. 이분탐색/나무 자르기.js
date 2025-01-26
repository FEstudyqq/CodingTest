const fs = require('fs');
const [[N, M], trees] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

let l = 0;
let r = Math.max(...trees);
let m = Math.floor((l + r) / 2);

while (l + 1 < r) {
  // 자른 나무 길이의 합
  const sum = trees.reduce((sum, tree) => {
    return tree > m ? sum + tree - m : sum;
  }, 0);

  if (sum >= M) l = m;
  if (sum < M) r = m;
  m = Math.floor((l + r) / 2);
}

console.log(m);
