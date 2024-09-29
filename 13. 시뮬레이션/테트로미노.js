const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const map = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const [n, m] = map.shift();

const tetromino = [
  // 민트
  [
    [0, 1, 2, 3],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 1, 2, 3],
  ],
  // 노랑
  [
    [0, 0, 1, 1],
    [0, 1, 0, 1],
  ],
  // 주황
  [
    [0, 1, 0, 0],
    [0, 0, 1, 2],
  ],
  [
    [0, 0, 1, 2],
    [0, 1, 1, 1],
  ],
  [
    [0, 0, 0, -1],
    [0, 1, 2, 2],
  ],
  [
    [0, 1, 2, 2],
    [0, 0, 0, 1],
  ],

  // 대칭 주황
  [
    [0, 0, -1, -2],
    [0, 1, 1, 1],
  ],
  [
    [0, 1, 1, 1],
    [0, 0, 1, 2],
  ],
  [
    [0, 1, 2, 0],
    [0, 0, 0, 1],
  ],
  [
    [0, 0, 0, 1],
    [0, 1, 2, 2],
  ],

  // 초록
  [
    [0, 1, 1, 2],
    [0, 0, 1, 1],
  ],
  [
    [0, 0, -1, -1],
    [0, 1, 1, 2],
  ],

  // 대칭초록
  [
    [0, 1, 0, -1],
    [0, 0, 1, 1],
  ],
  [
    [0, 0, 1, 1],
    [0, 1, 1, 2],
  ],

  // 핑크
  [
    [0, 0, 1, 0],
    [0, 1, 1, 2],
  ],
  [
    [0, 1, 2, 1],
    [0, 0, 0, 1],
  ],
  [
    [0, -1, 0, 1],
    [0, 1, 1, 1],
  ],
  [
    [0, 0, 0, -1],
    [0, 1, 2, 1],
  ],
];

const getTetrominoScore = (x, y, dx, dy) => {
  let sum = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) return 0;
    else sum += map[nx][ny];
  }

  return sum;
};

let max = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (const [dx, dy] of tetromino) {
      const score = getTetrominoScore(i, j, dx, dy);
      if (score > max) max = score;
    }
  }
}

console.log(max);
