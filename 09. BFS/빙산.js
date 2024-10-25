const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...map] = fs
  .readFileSync(path, 'utf-8')
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n, m] = nm;

const getIce = () => {
  const ice = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] > 0) ice.push([i, j]);
    }
  }

  return ice;
};

const meltIce = (Ice) => {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const meltingIce = [];

  for (const [x, y] of Ice) {
    let meltingCnt = 0;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (map[nx][ny] === 0) meltingCnt++;
    }

    meltingIce.push([x, y, meltingCnt]);
  }

  for (const ice of meltingIce) {
    const [x, y, size] = ice;
    map[x][y] -= size;

    if (map[x][y] < 0) map[x][y] = 0;
  }
};

const dfs = (x, y, visited) => {
  if (x < 0 || y < 0 || x >= n || y >= m) return;
  if (visited[x][y] <= 0) return;

  visited[x][y] = -1;

  dfs(x + 1, y, visited);
  dfs(x - 1, y, visited);
  dfs(x, y + 1, visited);
  dfs(x, y - 1, visited);
};

let year = 0;
while (true) {
  const ice = getIce();

  meltIce(ice);

  let iceCnt = 0;
  const visited = map.map((it) => it.slice());
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] > 0) {
        dfs(i, j, visited);

        iceCnt += 1;
      }
    }
  }

  year += 1;
  if (iceCnt === 0) {
    console.log(0);
    break;
  } else if (iceCnt > 1) {
    console.log(year);
    break;
  }
}
