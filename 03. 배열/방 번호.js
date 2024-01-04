const fs = require('fs');
const numbers = [...fs.readFileSync('/dev/stdin').toString().trim()].map(
  Number,
);

solution();

function solution() {
  let cnt = Array.from({ length: 10 }).fill(0);
  numbers.forEach((num) => cnt[num]++);

  // 6, 9 뒤집어서 이용 가능하면 뒤집기
  cnt[6] = Math.round((cnt[9] + cnt[6]) / 2);
  cnt[9] = Math.abs(cnt[9] - cnt[6]);

  const max = Math.max(...cnt);
  console.log(max);
}
