const fs = require('fs');
const [T, ...testCases] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [W, H, K] = [0, 0, 0];
solution();

function solution() {
  for (let i = 0; i < Number(T); i++) {
    [W, H, K] = testCases.shift().split(' ').map(Number);
    const map = createMap(K);
    const cnt = count(map);
    console.log(cnt);
  }
}

function createMap(K) {
  const map = Array.from({ length: H }).map(() =>
    Array.from({ length: W }).fill(0),
  );
  // fill map
  for (let i = 0; i < K; i++) {
    // x, y로 주기 때문에 c, r 순서로 받고, map에 할당할 땐 r, c 위치에 할당
    const [c, r] = testCases.shift().split(' ').map(Number);
    map[r][c] = 1;
  }
  return map;
}

function count(map) {
  let cnt = 0;
  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      if (map[r][c] === 1) {
        bfs(r, c, map);
        cnt++;
      }
    }
  }
  return cnt;
}

function bfs(r, c, map) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  const queue = [[r, c]];

  map[r][c] = 0; // visited

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (isValidPosition(nr, nc) && map[nr][nc] === 1) {
        queue.push([nr, nc]);
        map[nr][nc] = 0; // visited
      }
    }
  }
}

function isValidPosition(r, c) {
  return 0 <= r && r < H && 0 <= c && c < W;
}
