const fs = require('fs');
let [n, ...rgb] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

n = Number(n);
solution();

function solution() {
  const nonBlindCnt = countArea();

  // R -> G 대체
  rgb = rgb.map((line) => line.replaceAll('R', 'G'));
  const blindCnt = countArea();

  console.log(nonBlindCnt, blindCnt);
}

function countArea() {
  let cnt = 0;
  const visited = createVisited(); // n * n array filled with false

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] !== true) {
        dfs(i, j, visited, rgb[i][j]);
        cnt++;
      }
    }
  }

  return cnt;
}

function createVisited() {
  return Array.from({ length: n }).map(() =>
    Array.from({ length: n }).fill(false),
  );
}

function dfs(r, c, visited, target) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  const stack = [[r, c]];

  visited[r][c] = true;

  while (stack.length > 0) {
    const [r, c] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (
        isValidPosition(nr, nc) &&
        visited[nr][nc] === false &&
        rgb[nr][nc] === target
      ) {
        stack.push([nr, nc]);
        visited[nr][nc] = true;
      }
    }
  }
}

function isValidPosition(r, c) {
  return 0 <= r && r < n && 0 <= c && c < n;
}
