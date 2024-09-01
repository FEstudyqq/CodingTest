const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
let inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .replaceAll('c=', '!')
  .replaceAll('c-', '!')
  .replaceAll('dz=', '!')
  .replaceAll('d-', '!')
  .replaceAll('lj', '!')
  .replaceAll('nj', '!')
  .replaceAll('s=', '!')
  .replaceAll('z=', '!');

console.log(inputs.length);
