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

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const q = [];
function bfs(x, y) {
  q.push([x, y]);
  let area = 1;
  maps[x][y] = 1;

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

      if (maps[nx][ny] === 0) {
        area += 1;
        maps[nx][ny] = 1;
        q.push([nx, ny]);
      }
    }
  }
  return area;
}

const result = [];
// 모든 모눈종이를 돌면서 bfs 수행
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (maps[i][j] == 0) {
      result.push(bfs(i, j));
    }
  }
}

// 결과 출력
console.log(result.length);
console.log(...result.sort((a, b) => a - b));
