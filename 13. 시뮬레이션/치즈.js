const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], ...map] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

// 외부 공기와 접촉된 부분을 2로 변경
const findOuterAir = (x, y, visited) => {
  if (x < 0 || y < 0 || x >= n || y >= m) return;

  if (map[x][y] === 1) return;
  if (!visited[x][y]) {
    visited[x][y] = true;
    map[x][y] = 2;

    findOuterAir(x + 1, y, visited);
    findOuterAir(x - 1, y, visited);
    findOuterAir(x, y + 1, visited);
    findOuterAir(x, y - 1, visited);
  }
};

// 외부공기와 몇 면이 접촉되어 녹을 예정인지 아닌지 확인
const isWilMelting = (x, y) => {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let outerAirConnectedCnt = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (map[nx][ny] === 2) outerAirConnectedCnt += 1;
  }

  return outerAirConnectedCnt >= 2;
};

let time = 0;
while (true) {
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  findOuterAir(0, 0, visited);

  const waitingMelting = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1 && isWilMelting(i, j)) {
        waitingMelting.push([i, j]);
      }
    }
  }

  if (waitingMelting.length === 0) break;

  for (const [i, j] of waitingMelting) {
    map[i][j] = 2;
  }

  time += 1;
}

console.log(time);
