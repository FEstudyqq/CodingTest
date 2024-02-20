/**
 * @param {number[]} nums 
 */
function sum(nums) {
  return nums.reduce((prev, current) => prev + current, 0);
}

const fs = require('fs');

const [_, second] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const people = second.split(' ').map(num => Number.parseInt(num, 10));
people.sort((a, b) => a - b);

for (let i = 1; i < people.length; i++) {
  people[i] += people[i - 1];
}

console.log(sum(people));