const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const answer = [];
function hanoi(n, first, second, third) {
  if (n === 1) {
    answer.push(`${first} ${third}`);
    return;
  }

  hanoi(n - 1, first, third, second); // n-1개 모두 두번째 탑으로 이동
  // 현재 상태: first: n, second: 1 ~ n-1, third: -
  answer.push(`${first} ${third}`); // 원판 n을 세번째 탑으로 이동

  hanoi(n - 1, second, first, third); // n-1개 모두 세번째 탑으로 이동
}

hanoi(N, 1, 2, 3);
console.log(answer.length);
console.log(answer.join('\n'));
