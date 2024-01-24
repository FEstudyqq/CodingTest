const fs = require('fs');
const [whk, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/** (0,0)이 왼쪽 위, (n,m)이 오른쪽 아래일 때 예제 1 그림
 * 0 0 1 1 0
 * 0 1 1 1 1
 * 0 0 1 1 0
 * 0 0 1 1 0
 * 1 1 0 0 0
 * 1 1 0 0 0
 * 0 0 0 0 0
 */

const [w, h] = whk.split(' ').map(Number);

const map = createMap();
solution();

function createMap() {
  const map = Array.from({ length: h }).map(() =>
    Array.from({ length: w }).fill(0),
  );

  // fill map
  lines.forEach((line) => {
    const [lr, lc, rr, rc] = line.split(' ').map(Number);
    for (let r = lr; r < rr; r++) {
      for (let c = lc; c < rc; c++) {
        map[r][c] = 1;
      }
    }
  });

  return map;
}

function solution() {
  let cnt = 0;
  const sizes = [];

  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      // if not visited
      if (map[r][c] === 0) {
        const size = dfs(r, c);
        sizes.push(size);
        cnt++;
      }
    }
  }

  console.log(cnt);
  console.log(...sizes.sort((a, b) => Number(a) - Number(b)));
}

function dfs(r, c) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  const stack = [[r, c]];
  let size = 1;

  map[r][c] = 1; // 시작 지점 방문 체크

  while (stack.length > 0) {
    const [r, c] = stack.pop();
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (isValidPosition(nr, nc) && map[nr][nc] === 0) {
        stack.push([nr, nc]);
        map[nr][nc] = 1; // 방문 예정 지점 스택에 넣었으니까 방문 체크
        size++;
      }
    }
  }

  return size;
}

function isValidPosition(r, c) {
  return 0 <= r && r < h && 0 <= c && c < w;
}
