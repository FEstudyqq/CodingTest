const fs = require('fs');
const [N, M] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const queue = Array.from({ length: N }).map((_, i) => i + 1);
const selected = [];

function loop(queue, selected) {
  while (queue.length > 0) {
    selected.push(queue.shift());

    if (selected.length === M) {
      console.log(selected.join(' '));
    } else {
      loop([...queue], [...selected]);
    }

    selected.pop();
  }
}

loop(queue, selected);
