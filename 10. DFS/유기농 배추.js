/**
 * @param {string[]} input 
 */
function makeCase(input) {
  const first = input.shift();

  const [M, N, K] = first.split(' ').map(str => Number.parseInt(str, 10));

  const positions = input.splice(0, K).map(str => str.split(' ').map(num => Number.parseInt(num, 10)));

  return { M, N, positions };
}

/**
 * @param {number} M 
 * @param {number} N 
 */
function makeArea(M, N) {
  /**
   * @type {number[]}
   */
  const area = new Array(M);

  for (let i = 0; i < M; i++) {
    const temp = new Array(N);

    for (let j = 0; j < N; j++) {
      temp[j] = 0;
    }

    area[i] = temp;
  }

  return area;
}

/**
 * @param {number} M
 * @param {number} N
 * @param {number[][]} positions 
 */
function putCabbage(M, N, positions) {
  const area = makeArea(M, N);

  positions.forEach(([x, y]) => {
    area[x][y] = 1;
  });

  return area;
}

/**
 * @param {number[][]} area 
 * @param {number[][]} visited 
 * @param {number} M 
 * @param {number} N 
 */
function dfs(area, visited, M, N) {
  const result = [];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      const stack = [];

      stack.push([i, j]);

      let size = 0;

      while (stack.length !== 0) {
        const [x, y] = stack.pop();

        if (x < 0 || x >= M || y < 0 || y >= N) {
          continue;
        }

        if (area[x][y] === 0) {
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

const [first, ...last] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number.parseInt(first, 10);

for (let i = 0; i < T; i++) {
  const { M, N, positions } = makeCase(last);

  const field = putCabbage(M, N, positions);
  const visited = makeArea(M, N);

  const cabbageArea = dfs(field, visited, M, N);
  console.log(cabbageArea.length);
}