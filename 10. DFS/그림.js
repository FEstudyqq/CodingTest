const fs = require('fs');
const [nm, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
const canvas = lines.map((line) => line.split(' ').map(Number));

solution();

function solution() {
  let cnt = 0;
  let maxSize = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (canvas[i][j] === 1) {
        cnt++;
        const size = dfs(i, j);
        maxSize = size > maxSize ? size : maxSize;
      }
    }
  }

  console.log(cnt + '\n' + maxSize);
}

function dfs(startR, startC) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  const stack = [[startR, startC]];
  let size = 0;

  canvas[startR][startC] = 0; // 시작 지점 방문 체크

  while (stack.length > 0) {
    size++;
    const [r, c] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (isValidPosition(nr, nc) && canvas[nr][nc] === 1) {
        stack.push([nr, nc]);
        canvas[nr][nc] = 0; // 스택에 넣었던 지점을 중복해서 넣지 않게 미리 방문 체크
      }
    }
  }

  return size;
}

function isValidPosition(r, c) {
  return 0 <= r && r < n && 0 <= c && c < m;
}
