/**
 * @param {number} n 
 * @param {number} m 
 * @returns {number[][]}
 */
function createVisited(n, m) {
  /**
   * @type {number[]}
   */
  const visited = new Array(n);

  for (let i = 0; i < n; i++) {
    const temp = new Array(m);

    for (let j = 0; j < m; j++) {
      temp[j] = 0;
    }

    visited[i] = temp;
  }

  return visited;
}

/**
 * @param {number[][]} paper 
 * @param {number[][]} visited 
 * @param {number} n 
 * @param {number} m 
 */
function dfs(paper, visited, n, m) {
  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const stack = [];
      stack.push([i, j]);
      
      let size = 0;

      while (stack.length !== 0) {
        const [x, y] = stack.pop();

        if (x < 0 || x >= n || y < 0 || y >= m) {
          continue;
        }

        if (paper[x][y] === 0) {
          continue;
        }

        if (visited[x][y] === 1) {
          continue;
        }

        size += 1;
        visited[x][y] = 1;

        stack.push([x + 1, y]);
        stack.push([x, y + 1]);
        stack.push([x - 1, y]);
        stack.push([x, y - 1]);
      }

      if (size !== 0) {
        result.push(size);
      }
    }
  }

  return result;
}

const fs = require('fs');

const [first, ...last] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = first.split(' ').map(str => Number.parseInt(str, 10));
const paper = last.map(str => str.split(' ').map(letter => Number.parseInt(letter, 10)));
const visited = createVisited(n, m);

const result = dfs(paper, visited, n, m);

const size = result.length;
const max = result.length === 0 ? 0 : Math.max(...result);

console.log(`${size}\n${max}`);