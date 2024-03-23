// 프로그래머스 타겟 넘버
let cnt = 0;

function solution(numbers, target) {
  search(0, numbers, target, 0);
  return cnt;
}

function search(calculated, remains, target, position) {
  if (position >= remains.length) {
    if (calculated === target) cnt++;
    return;
  }

  const num = remains[position];

  search(calculated + num, remains, target, position + 1);
  search(calculated - num, remains, target, position + 1);
}
