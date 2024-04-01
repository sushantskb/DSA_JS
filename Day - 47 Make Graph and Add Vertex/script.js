class Graph {
  constructor() {
    this.data = {};
  }

  addVertex(vertex) {
    if (!this.data[vertex]) {
      this.data[vertex] = [];
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
console.log(graph.data);