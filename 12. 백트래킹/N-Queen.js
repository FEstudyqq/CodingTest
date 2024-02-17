const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const visited = [];
let cnt = 0;

function solution(r) {
  if (visited.length === N) {
    cnt++;
    return;
  }

  for (let c = 0; c < N; c++) {
    if (!canVisit(r, c)) continue;

    visited.push([r, c]);
    solution(r + 1);
    visited.pop();
  }
}

function canVisit(nr, nc) {
  for (const [r, c] of visited) {
    if (nr === r || nc === c || nr - nc === r - c || nr + nc === r + c)
      return false;
  }
  return true;
}

solution(0, 0);
console.log(cnt);
