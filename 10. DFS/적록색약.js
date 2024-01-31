/**
 * @param {*} N 
 */
function makeArea(N) {
  /**
   * @type {number[]}
   */
  const area = new Array(N);

  for (let i = 0; i < N; i++) {
    const temp = new Array(N);

    for (let j = 0; j < N; j++) {
      temp[j] = 0;
    }

    area[i] = temp;
  }

  return area;
}

/**
 * @param {string} previous 
 * @param {string} current 
 * @param {boolean} weak 
 */
function isSameColor(previous, current, weak) {
  if (weak) {
    if (previous === current) {
      return true;
    }

    if ((previous === 'R' && current === 'G') || (previous === 'G' && current === 'R')) {
      return true;
    }

    return false;
  }

  return previous === current;
}

/**
 * @param {string[][]} grid 
 * @param {number[][]} visited 
 * @param {boolean} weak 
 */
function dfs(grid, visited, weak) {
  const N = grid.length;

  const result = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const stack = [];

      let size = 0;

      if (visited[i][j] === 0) {
        stack.push([i, j, grid[i][j]]);
        size += 1;
      }

      while (stack.length !== 0) {
        const [x, y, color] = stack.pop();

        if (x < 0 || x >= N || y < 0 || y >= N) {
          continue;
        }

        if (visited[x][y] === 1) {
          continue;
        }

        if (!isSameColor(color, grid[x][y], weak)) {
          continue;
        }

        visited[x][y] = 1;
        size += 1;

        stack.push([x + 1, y, grid[x][y]]);
        stack.push([x, y + 1, grid[x][y]]);
        stack.push([x - 1, y, grid[x][y]]);
        stack.push([x, y - 1, grid[x][y]]);
      }

      if (size !== 0) {
        result.push(size);
      }
    }
  }

  return result.length;
}

const fs = require('fs');

const [first, ...last] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number.parseInt(first, 10);

const grid = last.map(line => line.split(''));
const visited1 = makeArea(N);
const visited2 = makeArea(N);

const notWeak = dfs(grid, visited1, false);
const weak = dfs(grid, visited2, true);

console.log(`${notWeak} ${weak}`);