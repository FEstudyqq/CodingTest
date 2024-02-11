function draw(size) {
  const prevSize = size / 3;
  const prevResult = size > 3 ? draw(prevSize) : ['*', '*', '*'];
  const result = Array.from({ length: size }).fill('');

  for (let i = 0; i < size; i++) {
    const star = prevResult[i % prevSize];

    if (isMiddle(prevSize, i)) {
      result[i] += star + ' '.repeat(prevSize) + star;
    } else {
      result[i] += star.repeat(3);
    }
  }

  return result;
}

function isMiddle(prevSize, i) {
  return prevSize <= i && i < prevSize * 2;
}

const fs = require('fs');
const N = Number(fs.readFileSync('./input.txt').toString().trim());
console.log(draw(N).join('\n'));
