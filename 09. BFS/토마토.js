/**
 * @param {number[][]} box 
 * @param {number} M 
 * @param {number} N 
 */
function bfs(box, M, N) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  
  const queue = [];
  let cursor = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 1) {
        queue.push([i, j, box[i][j]]);
      }
    }
  }

  while (queue.length > cursor) {
    const [x, y] = queue[cursor];
    cursor += 1;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
        continue;
      }

      if (box[nx][ny] === 0) {
        box[nx][ny] = box[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

/**
 * @param {number[]} box 
 * @param {number} M 
 * @param {number} N 
 */
function check(box, M, N) {
  let result = 0;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (box[x][y] === 0) {
        return -1;
      }

      if (result < box[x][y]) {
        result = box[x][y];
      }
    }
  }

  return result - 1;
}

const fs = require('fs');

const [first, ...last] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = first.split(' ').map(str => Number.parseInt(str, 10));

const box = last.map(line => line.split(' ').map(str => Number.parseInt(str, 10)));

bfs(box, M, N);

console.log(check(box, M, N));