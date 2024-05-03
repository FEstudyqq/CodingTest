/**
 * @param {[number, number][]} trucks 
 */
function totalWeight(trucks) {
  return trucks.map((truck) => truck[0]).reduce((previous, current) => previous + current, 0);
}

/**
 * @param {number[]} trucks 
 * @param {number} w 
 * @param {number} L 
 */
function solve(trucks, w, L) {
  /**
   * @type {[number, number][]}
   */
  const queue = [];
  const src = [...trucks];

  let time = 0;

  while (queue.length !== 0 || src.length !== 0) {
    if (queue.length !== 0) {
      if (queue[0][1] === w) {
        queue.shift();
      }

      queue.forEach((truck) => truck[1] += 1);
    }

    if (src.length !== 0) {
      if (totalWeight(queue) + src[0] <= L) {
        queue.push([src.shift(), 1]);
      }
    }

    time += 1;
  }

  return time;
}

const fs = require('fs');

const [first, second] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [_n, w, L] = first.split(' ').map(str => Number.parseInt(str, 10));
const trucks = second.split(' ').map(str => Number.parseInt(str, 10));

console.log(solve(trucks, w, L));