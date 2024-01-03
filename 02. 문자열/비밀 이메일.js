const fs = require('fs');
const encoded = fs.readFileSync('/dev/stdin').toString().trim();
const [row, col] = getRowAndColumn(encoded);
const decoded = decode(row, col, encoded);
console.log(decoded);

function getRowAndColumn(encoded) {
  const len = encoded.length;
  let row, col;

  for (let i = 1; i <= len / i; i++) {
    if (len % i === 0) {
      row = i;
      col = len / i;
    }
  }

  return [row, col];
}

function decode(row, col, encoded) {
  let decoded = '';
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      decoded += encoded[j * row + i];
    }
  }
  return decoded;
}
