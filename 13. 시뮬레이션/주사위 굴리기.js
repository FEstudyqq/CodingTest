/**
 * @param {number[][]} die 
 * @param {1 | 2 | 3 | 4} command 
 */
function roll(die, command) {
  const horizontal = [...die[0]];
  const vertical = [...die[1]];

  if (command === 1 || command === 2) {
    if (command === 1) {
      horizontal.splice(0, 0, vertical.pop());
      vertical.push(horizontal.pop());
    } else {
      horizontal.push(vertical.pop());
      vertical.push(horizontal.shift());
    }

    vertical[1] = horizontal[1];
  } else {
    if (command === 3) {
      vertical.push(vertical.shift());
    } else {
      vertical.splice(0, 0, vertical.pop());
    }

    horizontal[1] = vertical[1];
  }

  return [horizontal, vertical];
}

/**
 * 
 * @param {number[]} position 
 * @param {number} N 
 * @param {number} M 
 * @param {number} command 
 */
function move(position, N, M, command) {
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  const x = position[0] + dx[command - 1];
  const y = position[1] + dy[command - 1];

  if (x < 0 || x >= N || y < 0 || y >= M) {
    return position;
  }

  return [x, y];
}

/**
 * @param {number[][]} map 
 * @param {number[][]} die 
 * @param {number[]} position 
 * @param {number} N 
 * @param {number} M 
 * @param {1 | 2 | 3 | 4} command 
 */
function process(map, die, position) {
  const [x, y] = position;
  
  if (map[x][y] === 0) {
    map[x][y] = die[1][3];
  } else {
    die[1][3] = map[x][y];
    map[x][y] = 0;
  }
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const first = input.slice(0, 1).flatMap(line => line.split(' ').map(num => Number.parseInt(num, 10)));
const map = input.slice(1, -1).map(line => line.split(' ').map(num => Number.parseInt(num, 10)));
const commands = input.slice(-1).flatMap(line => line.split(' ').map(num => Number.parseInt(num, 10)));

const [N, M, x, y, _K] = first;

let die = [
  [0, 0, 0],
  [0, 0, 0, 0],
]

let position = [x, y];

/** @type {number[]} */
const result = [];

commands.forEach((/** @type {1 | 2 | 3 | 4} */ command) => {
  prev = [...position];
  position = move(position, N, M, command);

  if (prev[0] !== position[0] || prev[1] !== position[1]) {
    die = roll(die, command);
    process(map, die, position);
    result.push(die[0][1]);
  }
});

console.log(result.join('\n'));