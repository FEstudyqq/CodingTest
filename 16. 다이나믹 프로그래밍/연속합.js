/**
 * @param {number[]} sequence 
 */
function solve(sequence) {
  const memo = [sequence[0]];

  const sequenceWithoutFirst = sequence.slice(1);

  sequenceWithoutFirst.forEach((value, i) => {
    memo.push(Math.max(memo[i] + value, value));
  });

  return Math.max(...memo);
}

const fs = require('fs');
const [_first, second] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

/**
 * @type {number[]}
 */
const sequence = second.split(' ').map((num) => Number.parseInt(num, 10));

console.log(solve(sequence));