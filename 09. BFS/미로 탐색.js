/**
 * @param {number} N 
 * @param {number} M 
 * @returns {number[][]}
 */
function createVisited(N, M) {
  /**
   * @type {number[]}
   */
  const visited = new Array(N);

  for (let i = 0; i < N; i++) {
    const temp = new Array(M);

    for (let j = 0; j < M; j++) {
      temp[j] = 0;
    }

    visited[i] = temp;
  }

  return visited;
}

/**
   * @param {number[][]} maze 
   * @param {number[][]} visited 
   * @param {number} N 
   * @param {number} M 
   */
function bfs(maze, visited, N, M) {
  const queue = [];

  let result = 1;

  queue.push([0, 0]);

  while (queue.length !== 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();

      if (x < 0 || x >= N || y < 0 || y >= M) {
        continue;
      }

      if (visited[x][y] !== 0) {
        continue;
      }

      if (maze[x][y] === 0) {
        continue;
      }

      visited[x][y] = 1;

      if (x === N - 1 && y === M - 1) {
        return result;
      }

      queue.push([x + 1, y]);
      queue.push([x, y + 1]);
      queue.push([x - 1, y]);
      queue.push([x, y - 1]);
    }

    result += 1;
  }
}

const fs = require('fs');

const [first, ...last] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = first.split(' ').map(str => Number.parseInt(str));
const maze = last.map(str => str.split('').map(letter => Number.parseInt(letter, 10)));

const visited = createVisited(N, M);

console.log(bfs(maze, visited, N, M));