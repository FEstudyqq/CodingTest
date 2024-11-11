const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [head, ...inputs] = fs.readFileSync(path).toString().split('\n');
let eggs = inputs.map((it) => it.split(' ').map((it) => Number(it)));
const n = Number(head);
let answer = 0;

// idx 번째 계란을 들었다.
// 현재 깨진 계란의 개수는 cnt
const bt = (idx, cnt) => {
  let flag = false;
  // 만약 마지막 계란이라면 종료
  if (idx === n) {
    answer = Math.max(cnt, answer);
    return;
  }

  // 만약 들고있는 계란이 깨졌다면 다음 계란 들기
  if (eggs[idx][0] <= 0) {
    bt(idx + 1, cnt);
  }
  // 만약 들고 있는 계란이 깨지지 않았다면 계란 부딪히기
  else {
    // 모든계란이 다 깨져서 부딪히지 못했다.
    flag = false;
    for (let i = 0; i < n; i++) {
      // 자기 자신이거나 계란 내구도가 없으면 못치니까 continue
      if (idx === i || eggs[i][0] <= 0) continue;

      // 계란 치기. 한번이라도 치면 flag가 true로 작동
      flag = true;
      eggs[idx][0] -= eggs[i][1];
      eggs[i][0] -= eggs[idx][1];

      bt(idx + 1, cnt + Number(eggs[idx][0] <= 0) + Number(eggs[i][0] <= 0));

      // 다음 경우의수 확인을 위한 복원
      eggs[idx][0] += eggs[i][1];
      eggs[i][0] += eggs[idx][1];
    }
    if (!flag) {
      bt(idx + 1, cnt);
    }
  }
};

bt(0, 0);
console.log(answer);
