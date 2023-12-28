// 2309

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ORIGINAL_SUM = 100;
const heights = new Set();

readline
  .on('line', function (line) {
    heights.add(Number(line));
  })
  .on('close', solution);

function solution() {
  const totalSum = Array.from(heights).reduce((sum, height) => sum + height, 0);
  const fakeSum = totalSum - ORIGINAL_SUM; // 가짜 난쟁이들 키의 합

  for (const height of Array.from(heights)) {
    const target = fakeSum - height;
    if (height !== target && heights.has(target)) {
      heights.delete(height);
      heights.delete(target);
      break;
    }
  }

  const sorted = Array.from(heights).sort((a, b) => Number(a) - Number(b));
  console.log(sorted.join('\n'));
}
