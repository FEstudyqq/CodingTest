const fs = require('fs');

/**
 * @param {number[]} nums 
 * @param {number} start 
 * @param {number} end 
 */
function reverseWithIndex(nums, start, end) {
  const front = nums.slice(0, start);
  const middle = nums.slice(start, end + 1);
  const back = nums.slice(end + 1, nums.length);

  middle.reverse();

  return front.concat(middle.concat(back));
}

const input = fs.readFileSync('/dev/stdin').toString().trim();
const numbers = input.split('\n').map(line => line.split(' ').map(str => Number.parseInt(str, 10) - 1));

let cards = Array.from({length: 20}, (_, i) => i + 1);

numbers.forEach(([first, second]) => {
  cards = reverseWithIndex(cards, first, second);
});

console.log(cards.join(' '));