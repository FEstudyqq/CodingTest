const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [t, ...inputs] = fs.readFileSync(path).toString().trim().split('\r\n');
const testCase = inputs.map((it) => it.split(' ').map((it) => Number(it)));

const maps = [];
let map = [];

// 테스트 케이스 분리 / 맵 생성
// 입력진짜 쓰레기같음
for (const tc of testCase) {
  if (tc.length === 3) {
    const [m, n, k] = tc;
    if (map.length !== 0) maps.push(map);
    map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  } else {
    const [y, x] = tc;
    map[x][y] = 1;
  }
}
maps.push(map);

// dfs 구현
function dfs(x, y, m, n, map) {
  if (x < 0 || y < 0 || x >= m || y >= n) return false;

  if (map[x][y] === 1) {
    map[x][y] = 0;

    dfs(x + 1, y, m, n, map);
    dfs(x - 1, y, m, n, map);
    dfs(x, y + 1, m, n, map);
    dfs(x, y - 1, m, n, map);

    return true;
  }

  return false;
}

for (const map of maps) {
  const [m, n] = [map.length, map[0].length];
  let cnt = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, m, n, map)) cnt++;
    }
  }
  console.log(cnt);
}
