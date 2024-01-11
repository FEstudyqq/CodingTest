const fs = require('fs');
const [N, heights] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const towers = heights.split(' ').map(x => Number.parseInt(x, 10));

const taller = [];
const result = [];

towers.forEach((value, index) => {
  if (taller.length === 0) {
    result.push(0);
  } else {
    while (taller.length > 0) {
      if (taller[taller.length - 1][0] < value) {
        taller.pop();
      } else {
        result.push(taller[taller.length - 1][1] + 1);
        break;
      }
    }
    
    if (taller.length === 0) {
      result.push(0);
    }
  }
    
  taller.push([value, index]);
});

console.log(result.join(' '));