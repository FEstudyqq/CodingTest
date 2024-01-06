const fs = require('fs');
const [initialString, M, ...commandLines] = fs
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

let cursor = createLinkedList();
edit();
printString();

function printString() {
  let result = [];

  // move cursor to the head
  while (cursor.prev) {
    cursor = cursor.prev;
  }

  while (cursor.next) {
    result.push(cursor.data);
    cursor = cursor.next;
  }
  console.log(result.join(''));
}

function edit() {
  for (let commandLine of commandLines) {
    const [command, typedChar] = commandLine.split(' ');
    if (command === 'L') moveCursorToLeft();
    else if (command === 'D') moveCursorToRight();
    else if (command === 'B') deleteLeftChar();
    else if (command === 'P') addCharToLeft(typedChar);
  }
}

function createLinkedList() {
  const stringArray = [...initialString, ''];

  const tail = stringArray.reduce((prev, char) => {
    const node = new ListNode(char, prev);
    if (prev != null) prev.next = node;
    return node;
  }, null);

  return tail;
}

function moveCursorToLeft() {
  cursor = cursor.prev ?? cursor;
}

function moveCursorToRight() {
  cursor = cursor.next ?? cursor;
}

function deleteLeftChar() {
  const targetNode = cursor.prev; // nullable
  if (!targetNode) return;

  if (targetNode.prev) targetNode.prev.next = cursor;
  cursor.prev = targetNode.prev;
}

function addCharToLeft(typedChar) {
  const prevNode = cursor.prev; // nullable
  const nextNode = cursor.next; // nullable

  const addedNode = new ListNode(typedChar, prevNode, cursor);

  if (prevNode) prevNode.next = addedNode;
  cursor.prev = addedNode;
}

// prev, next 둘 다 필요함
// {'a', -}-> {'b', -}-> {'c', -}-> {'', .}
// ↑ head                            ↑ tail
