const fs = require('fs');
const [N, K] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

class ListNode {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

const head = makeCircularList(N);
const permutation = getPermutation(K, head);
printPermutation(permutation);

function makeCircularList(N) {
  const tempHeadNode = new ListNode('');
  tempHeadNode.prev = tempHeadNode;
  tempHeadNode.next = tempHeadNode;

  Array.from({ length: N }).reduce((prevNode, _, idx) => {
    const curNode = new ListNode(idx + 1, prevNode, tempHeadNode);
    tempHeadNode.prev = curNode;
    prevNode.next = curNode;
    return curNode;
  }, tempHeadNode);

  const head = removeNode(tempHeadNode);
  return head;
}

function removeNode(target) {
  const prevNode = target.prev;
  const nextNode = target.next;
  prevNode.next = nextNode;
  nextNode.prev = prevNode;

  return nextNode;
}

function getPermutation(K, head) {
  const permutation = [];
  let curNode = head;

  for (let n_th = 1; curNode !== curNode.next; n_th++) {
    if (n_th === K) {
      permutation.push(curNode.data);
      curNode = removeNode(curNode);
      n_th = 0;
      continue;
    }

    curNode = curNode.next;
  }

  permutation.push(curNode.data);
  return permutation;
}

function printPermutation(permutation) {
  console.log(`<${permutation.join(', ')}>`);
}
