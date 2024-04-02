class Graph {
    constructor() {
        this.data = {}
    }

    addVertex (vertex) {
        if(!this.data[vertex]){
            this.data[vertex] = []
        }
    }

    addEdge(v1, v2){
        if(!this.data[v1]){
            this.addVertex(v1);
        }
        if(!this.data[v2]){
            this.addVertex(v2);
        }

        this.data[v1].push(v2);
        this.data[v2].push(v1);
    }

    removeEdge(v1, v2){
        this.data[v1] = this.data[v1].filter((item) => {
            return item!=v2
        });
        this.data[v2] = this.data[v2].filter((item) => {
            return item!=v1
        });
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

graph.removeEdge("A", "B")

console.log(graph.data);