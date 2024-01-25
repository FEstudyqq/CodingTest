/**
 * @param {number} M 
 * @param {number} N 
 * @returns {number[][]}
 */
function createRectangle(N, M) {
  /**
   * @type {number[]}
   */
  const visited = new Array(M);

  for (let i = 0; i < M; i++) {
    const temp = new Array(N);

    for (let j = 0; j < N; j++) {
      temp[j] = 0;
    }

    visited[i] = temp;
  }

  return visited;
}

/**
 * @param {number} M 
 * @param {number} N 
 * @param {number[][]} rectangles 
 */
function dividedArea(M, N, rectangles) {
  const area = createRectangle(N, M);

  for (const rectangle of rectangles) {
    const [x1, y1, x2, y2] = rectangle;
    
    for (let j = x1; j < x2; j++) {
      for (let i = y1; i < y2; i++) {
        area[i][j] = 1;
      }
    }
  }

  return area;
}

/**
 * @param {number[][]} area 
 * @param {number[][]} visited 
 * @param {number} M 
 * @param {number} N 
 */
function bfs(area, visited, M, N) {
  const result = [];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      const stack = [];

      stack.push([i, j]);

      let size = 0;

      while (stack.length !== 0) {
        const [x, y] = stack.shift();

        if (x < 0 || x >= M || y < 0 || y >= N) {
          continue;
        }

        if (area[x][y] === 1) {
          continue;
        }

        if (visited[x][y] === 1) {
          continue;
        }

        size += 1;
        visited[x][y] = 1;

        stack.push([x - 1, y]);
        stack.push([x, y - 1]);
        stack.push([x + 1, y]);
        stack.push([x, y + 1]);
      }

      if (size !== 0) {
        result.push(size);
      }
    }
  }

  return result;
}

const fs = require('fs');

const [first, ...last] = fs.readFileSync('./input.txt').toString().trim().split('\n');

const [M, N, K] = first.split(' ').map(str => Number.parseInt(str, 10));

const rectangles = last.map(str => str.split(' ').map(letter => Number.parseInt(letter, 10)));

const area = dividedArea(M, N, rectangles);
const visited = createRectangle(M, N);

const result = bfs(area, visited, M, N);

const sorted = [...result];
sorted.sort((a, b) => a - b);

console.log(`${sorted.length}\n${sorted.join(' ')}`);