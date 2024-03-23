class Graph {
  constructor(size) {
    this.vertices = [...Array(size).keys()].map((value) => value + 1);
    this.edges = new Map();

    this.vertices.forEach(vertex => this.edges.set(vertex, []));
  }

  addVertex(first, second) {
    this.edges.get(first).push(second);
    this.edges.get(second).push(first);
  }

  /**
   * @param {number} vertex 
   * @returns {number[]}
   */
  linked(vertex) {
    return this.edges.get(vertex);
  }
}

const fs = require('fs');

const [computerString, , ...pairStrings] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const computer = Number.parseInt(computerString, 10);
const pairs = pairStrings.map(str => str.split(' ').map(num => Number.parseInt(num, 10)));

const graph = new Graph(computer);

pairs.forEach(([first, second]) => graph.addVertex(first, second));

const result = [1];
const stack = [1];

while (stack.length !== 0) {
  const next = stack.pop();
  
  const linked = graph.linked(next);
  
  linked.forEach(vertex => {
    if (!result.includes(vertex)) {
      stack.push(vertex);
      result.push(vertex);
    }
  });
}

console.log(result.length - 1);