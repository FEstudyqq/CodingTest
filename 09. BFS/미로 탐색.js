const fs = require('fs');
const [size, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = size.split(' ').map(Number);
const maze = lines.map((line) => [...line].map(Number));
const queue = [[0, 0]]; // 방문 예정 위치 담기
solution();

function solution() {
  while (queue.length > 0) {
    let [r, c] = queue.shift();
    if (r === N - 1 && c === M - 1) {
      console.log(maze[N - 1][M - 1]);
      break;
    }

    bfs(r, c);
  }
}

function bfs(r, c) {
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];

  const currentValue = maze[r][c];
  maze[r][c] = 0; // check visited

  for (let i = 0; i < 4; i++) {
    nr = r + dr[i];
    nc = c + dc[i];
    update(nr, nc, currentValue);
  }
}

function update(nr, nc, curVal) {
  if (0 <= nr && nr < N && 0 <= nc && nc < M && maze[nr][nc] === 1) {
    queue.push([nr, nc]);
    maze[nr][nc] = curVal + 1;
  }
}
