/**
 * @param {string} input
 */
const parse = (input) => {
  const [n, k, ...leftover] = input.split("\n");

  const N = Number.parseInt(n);
  const K = Number.parseInt(k);

  const apples = leftover
    .slice(0, K)
    .map((line) => line.split(" ").map((num) => Number.parseInt(num) - 1));

  const [l, ...d] = leftover.slice(K);
  const L = Number.parseInt(l);
  const directions = d.map((line) => {
    const [x, c] = line.split(" ");

    return { X: Number.parseInt(x), C: c };
  });

  return {
    N,
    K,
    apples,
    L,
    directions,
  };
};

/**
 * @param {[number, number][]} snake
 * @param {number} N
 */
const judgeEnd = (snake, N) => {
  const [x, y] = snake[0];

  if (x < 0 || x >= N || y < 0 || y >= N) {
    return false;
  }

  if (snake.slice(1).some(([bx, by]) => x === bx && y === by)) {
    return false;
  }

  return true;
};

/**
 * @param {[number, number][]} snake
 * @param {number[][]} board
 */
const judgeGrow = (snake, board) => {
  const [x, y] = snake[0];

  if (board[x][y] === 1) {
    board[x][y] = 0;
    return true;
  }

  return false;
};

/**
 * @param {0 | 1 | 2 | 3} current
 * @param {'L' | 'D'} next
 */
const turn = (current, next) => {
  let result = current;

  if (next === "L") {
    result -= 1;

    if (result < 0) {
      result = 3;
    }

    return result;
  }

  result += 1;

  if (result > 3) {
    result = 0;
  }

  return result;
};

/**
 * @param {[number, number][]} snake
 * @param {0 | 1 | 2 | 3} direction
 * @returns {[number, number]}
 */
const nextHeadPosition = (snake, direction) => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const [cx, cy] = snake[0];

  return [cx + dx[direction], cy + dy[direction]];
};

/**
 * @param {{ N: number, K: number, apples: number[][], L: number, directions: { X: number; C: string }[] }} obj
 */
const solve = (obj) => {
  const { N, _K, apples, _L, directions } = obj;

  /**
   * @type {number[][]}
   */
  const board = Array.from(Array(N)).map(() => Array.from(Array(N).fill(0)));
  apples.forEach(([x, y]) => (board[y][x] = 1));

  /**
   * @type {[number, number][]}
   */
  const snake = [[0, 0]];

  let time = 0;
  let direction = 0;

  while (true) {
    time += 1;

    snake.unshift(nextHeadPosition(snake, direction));

    if (!judgeEnd(snake, N)) {
      break;
    }

    if (!judgeGrow(snake, board)) {
      snake.pop();
    }

    const d = directions.find(({ X }) => time === X);

    if (d) {
      const { C } = d;

      direction = turn(direction, C);
    }
  }

  return time;
};

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const parsed = parse(input);

console.log(solve(parsed));
