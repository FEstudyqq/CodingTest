const fs = require('fs');
const [n, ...tree] = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((node) => node.split(' ').map(Number));

for (let level = n - 2; level >= 0; level--) {
  const children = tree.pop();
  tree[level] = tree[level].map((node, i) => {
    const biggerChild = Math.max(children[i], children[i + 1]);
    return node + biggerChild;
  });
}

console.log(tree[0][0]);
