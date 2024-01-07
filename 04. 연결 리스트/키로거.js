const fs = require('fs');
const [T, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

class ListNode {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

solution(Number(T), lines);

function solution(T, lines) {
  lines.forEach((string) => {
    const head = new ListNode('');
    let pointer = head;

    Array.from(string).forEach((key) => {
      if (key === '<') pointer = movePointerToLeft(pointer);
      else if (key === '>') pointer = movePointerToRight(pointer);
      else if (key === '-') pointer = deletePrev(pointer);
      else pointer = insertKey(pointer, key);
    });

    // head부터 순회하며 출력
    printPassword(head);
  });
}

function movePointerToLeft(pointer) {
  return pointer.prev ?? pointer;
}

function movePointerToRight(pointer) {
  return pointer.next ?? pointer;
}

function deletePrev(pointer) {
  // 포인터가 가리키는 노드를 삭제
  if (!pointer.prev) return pointer; // pointer === head이면 생략

  const prevNode = pointer.prev;
  const nextNode = pointer.next;

  if (prevNode) prevNode.next = nextNode;
  if (nextNode) nextNode.prev = prevNode;

  return prevNode;
}

function insertKey(pointer, key) {
  // 포인터가 가리키는 노드의 다음 위치에 새 노드를 삽입
  const nextNode = pointer.next; // nullable
  const newNode = new ListNode(key, pointer, nextNode);

  if (nextNode) nextNode.prev = newNode;
  pointer.next = newNode;

  return newNode;
}

function printPassword(head) {
  const password = [];
  let pointer = head.next;
  while (pointer) {
    password.push(pointer.data);
    pointer = pointer.next;
  }
  console.log(password.join(''));
}
