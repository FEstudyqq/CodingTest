const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nmk, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

const [m, n, k] = nmk.split(' ').map((it) => Number(it));
const maps = Array.from({ length: m }, () => Array(n).fill(0));
const crds = inputs.map((it) => it.split(' ').map((it) => Number(it)));

// 입력받은 k줄의 좌표값으로 모눈종이 (maps)을 칠해줌
for (const crd of crds) {
  const [x1, y1, x2, y2] = crd;
  for (let i = y1; i < y2; i++) {
    for (let j = x1; j < x2; j++) {
      maps[i][j] = 1;
    }
  }
}

let area = 0;
const result = [];

// 범위를 구하는것이기 때문에 DFS가 더 적합
function dfs(x, y) {
  // 범위에 적합하다면
  if (0 <= x && x < m && 0 <= y && y < n) {
    // 미방문 상태일 때
    if (maps[x][y] === 0) {
      maps[x][y] = 1; // 방문 체크
      area += 1; // 넓이값 1 증가
      dfs(x + 1, y);
      dfs(x - 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
      return true;
    }
    return false;
  }
}

// 모든 모눈종이를 돌면서 dfs 수행
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) {
      result.push(area);
      area = 0;
    }
  }
}

// 결과 출력
console.log(result.length);
console.log(...result.sort((a, b) => a - b));
