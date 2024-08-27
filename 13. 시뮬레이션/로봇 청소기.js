/**
 * @param {number[][]} room
 * @param {number} x
 * @param {number} y
 */
function canClean(room, y, x) {
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  return [0, 1, 2, 3]
    .map((direction) => room[y + dy[direction]][x + dx[direction]])
    .some((state) => state === 0);
}

/**
 * @param {number[][]} room
 * @param {number} x
 * @param {number} y
 * @param {0 | 1 | 2 | 3} d
 */
function canGoBack(room, y, x, d) {
  switch (d) {
    case 0: {
      return room[y + 1][x] !== 1;
    }
    case 1: {
      return room[y][x - 1] !== 1;
    }
    case 2: {
      return room[y - 1][x] !== 1;
    }
    case 3: {
      return room[y][x + 1] !== 1;
    }
  }
}

/**
 * @param {number} y
 * @param {number} x
 * @param {0 | 1 | 2 | 3} d
 */
function getFront(y, x, d) {
  switch (d) {
    case 0: {
      return [y - 1, x];
    }
    case 1: {
      return [y, x + 1];
    }
    case 2: {
      return [y + 1, x];
    }
    case 3: {
      return [y, x - 1];
    }
  }
}

/**
 * @param {number} y
 * @param {number} x
 * @param {0 | 1 | 2 | 3} d
 */
function getBack(y, x, d) {
  switch (d) {
    case 0: {
      return [y + 1, x];
    }
    case 1: {
      return [y, x - 1];
    }
    case 2: {
      return [y - 1, x];
    }
    case 3: {
      return [y, x + 1];
    }
  }
}

/**
 * @param {number[][]} room
 * @param {number} x
 * @param {number} y
 * @param {0 | 1 | 2 | 3} d
 */
function clean(room, y, x, d) {
  /**
   * @type {[number, number, 0 | 1 | 2 | 3][]}
   */
  const stack = [];
  stack.push([y, x, d]);

  let result = 0;

  while (stack.length !== 0) {
    const position = stack.pop();

    const cy = position[0];
    const cx = position[1];
    const direction = position[2];

    if (room[cy][cx] === 0) {
      room[cy][cx] = -1;
      result += 1;
    }

    if (canClean(room, cy, cx)) {
      let nextDirection = direction - 1;

      if (nextDirection === -1) {
        nextDirection = 3;
      }

      const nextPosition = getFront(cy, cx, nextDirection);

      const ny = nextPosition[0];
      const nx = nextPosition[1];

      if (room[ny][nx] === 0) {
        stack.push([ny, nx, nextDirection]);
      } else {
        stack.push([cy, cx, nextDirection]);
      }

      continue;
    }

    if (canGoBack(room, cy, cx, direction)) {
      const nextPosition = getBack(cy, cx, direction);

      const ny = nextPosition[0];
      const nx = nextPosition[1];

      stack.push([ny, nx, direction]);
    }
  }

  return result;
}

const fs = require("fs");

const [size, robot, ...last] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [_N, _M] = size.split(" ").map((value) => Number.parseInt(value));

const [r, c, d] = robot.split(" ").map((value) => Number.parseInt(value));

const room = last.map((line) =>
  line.split(" ").map((num) => Number.parseInt(num)),
);

console.log(clean(room, r, c, d));
