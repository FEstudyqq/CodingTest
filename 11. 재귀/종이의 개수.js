/**
 * @param {number[][]} paper 
 * @param {number} startX
 * @param {number} startY
 * @param {number} size 
 */
function isSameNumber(paper, startX, startY, size) {
  const first = paper[startX][startY];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (paper[startX + i][startY + j] !== first) {
        return false;
      }
    }
  }

  return true;
}

/**
 * 
 * @param {number} num 
 * @param {boolean[]} minus 
 * @param {boolean[]} zero 
 * @param {boolean[]} plus 
 */
function addResult(num, minus, zero, plus) {
  if (num === -1) {
    minus.push(true);
    return;
  }

  if (num === 0) {
    zero.push(true);
    return;
  }

  if (num === 1) {
    plus.push(true);
    return;
  }
}

/**
 * @param {number[][]} paper 
 * @param {number} x 
 * @param {number} y 
 * @param {number} size 
 * @param {boolean[]} minus 
 * @param {boolean[]} zero 
 * @param {boolean[]} plus 
 */
function count(paper, x, y, size, minus, zero, plus) {
  if (size === 1) {
    addResult(paper[x][y], minus, zero, plus);
    return;
  }
  
  if (isSameNumber(paper, x, y, size)) {
    const first = paper[x][y];

    addResult(first, minus, zero, plus);

    return;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      count(paper, x + (size / 3) * i, y + (size / 3) * j, size / 3, minus, zero, plus);
    }
  }
}

const fs = require('fs');

const [head, ...tail] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number.parseInt(head, 10);

const paper = tail.map(line => line.split(' ').map(num => Number.parseInt(num, 10)));

const minus = [];
const zero = [];
const plus = [];

count(paper, 0, 0, N, minus, zero, plus);

console.log(`${minus.length}\n${zero.length}\n${plus.length}`);