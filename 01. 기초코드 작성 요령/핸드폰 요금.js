const fs = require('fs');

/**
 * @param {number[]} nums 
 */
function sum(nums) {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

/**
 * 
 * @param {number} call 
 * @param {number} unit
 * @param {number} fee
 */
function calculate(call, unit, fee) {
  return (Math.floor(call / unit) + 1) * fee;
}

const input = fs.readFileSync('/dev/stdin').toString().trim();
const [ _, callsInput ] = input.split('\n');

const calls = callsInput.split(' ').map(callInput => Number.parseInt(callInput, 10));

const yUnit = 30;
const yFee = 10;
const mUnit = 60;
const mFee = 15;

const yTotal = sum(calls.map(call => calculate(call, yUnit, yFee)));
const mTotal = sum(calls.map(call => calculate(call, mUnit, mFee)));

if (yTotal < mTotal) {
  console.log(`Y ${yTotal}`);
} else if (mTotal < yTotal) {
  console.log(`M ${mTotal}`);
} else {
  console.log(`Y M ${yTotal}`);
}